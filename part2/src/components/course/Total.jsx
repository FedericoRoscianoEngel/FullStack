const Total = ({ course }) => {
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <div>
            <p>Numeros de Ejercicios: {totalExercises}</p>
        </div>
    )
}



export default Total