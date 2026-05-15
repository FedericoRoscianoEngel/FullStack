import { useState } from "react"

const Button = (props) => {
  console.log(props)
  return (
    <button onClick={props.onClick}>
      {props.children}
    </button>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      {props.text}: {props.value}
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  const average =
    total === 0
      ? 0
      : (good - bad) / total

  const percentage =
    total === 0
      ? 0
      : ((good / total) * 100).toFixed(1)

  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={`${percentage}%`} />
    </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = () => {
    return (
      <div>
        <p>Curso {course.name}</p>
      </div>
    )
  }

  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => (
          <Part key={part.name} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    )
  }

  const Part = ({ name, exercises }) => {
    return (
      <div>
        <p>
          Nombre: {name} Ejercicios: {exercises}
        </p>
      </div>
    )
  }


  const Total = ({ course }) => {
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <div>
        <p>Numeros de Ejercicios: {totalExercises}</p>
      </div>
    )
  }


  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const anecdotas = [
    "Un buen programador es alguien que siempre está aprendiendo y mejorando.",
    "La mejor manera de aprender a programar es programando.",
    "La programación es el arte de hacer que las computadoras hagan lo que tú quieres que hagan.",
    "No te preocupes si no entiendes algo de inmediato, la programación es un proceso de aprendizaje continuo."
  ]

  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotas.length))
  const [votes, setVotes] = useState(
    Array(anecdotas.length).fill(0)
  )


  const nextAnecdota = () => {
    setSelected((selected + 1) % anecdotas.length)
  }

  const vote = (selected) => {
    const copy = [...votes]

    copy[selected] += 1

    setVotes(copy)
  }

  return (
    <>
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>

      <div>
        <Button onClick={() => setGood(good + 1)}>Good {good}</Button>
        <Button onClick={() => setNeutral(neutral + 1)}>Neutral {neutral}</Button>
        <Button onClick={() => setBad(bad + 1)}>Bad {bad}</Button>
      </div>

      <div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </div>

      <div>
        <p>{anecdotas[selected]}</p>

        <p>Votos: {votes[selected]}</p>

        <Button onClick={nextAnecdota}>Siguiente Anecdota</Button>
        <Button onClick={() => vote(selected)}>Votar</Button>
      </div>


      <div>
        <h2>Anecdota con más votos</h2>
        {Math.max(...votes) === 0 ? (
          <p>No hay votos aún</p>
        ) : (
          <div>
            <p>{anecdotas[votes.indexOf(Math.max(...votes))]}</p>
            <p>Votos: {Math.max(...votes)}</p>
          </div>
        )}
      </div>


    </>
  )
}

export default App