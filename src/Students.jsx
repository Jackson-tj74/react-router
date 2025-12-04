
function Students() {
   const students = [
    { id: 1, name: "Jackson" },
    { id: 2, name: "Aline" },
  ];
  
  return (
    <>
    <div>
    {students.map((student) => (
  <p key={student.id}>{student.name}</p>
))}
    </div>

</>

  )
}

export default Students




