const Student = ({ student }) => {
  return (
    <div>
      <h3>
        {student.firstName}{' '}
      </h3>
      <p>{student.lastName}</p>
    </div>
  )
}

export default Student;