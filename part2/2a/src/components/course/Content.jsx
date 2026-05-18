const Content = ({ course }) => {
    return (
        <ul>
            {course.parts.map((part) => (
                <li key={part.id}>
                    {part.name} - {part.exercises} exercises
                </li>
            ))}
        </ul>
    )

}

export default Content