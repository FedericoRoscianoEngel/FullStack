
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

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App