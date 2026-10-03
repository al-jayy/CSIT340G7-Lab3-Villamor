const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} - {props.exercises1} units</p>
      <p>{props.part2} - {props.exercises2} units</p>
      <p>{props.part3} - {props.exercises3} units</p>
    </div>
  )
}

const Total = (props) => {
  return <p>Total Units: {props.total}</p>
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.name} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'Bachelor of Science in Information Technology'
  const part1 = 'Industry Elective 1'
  const exercises1 = 3
  const part2 = 'Information Management 2'
  const exercises2 = 3
  const part3 = 'Applications Development and Emerging Technologies'
  const exercises3 = 3

  const name = 'James Allen M. Villamor'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course}/>
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3}/>
      <Footer name={name} courseCode={courseCode} section={section}/>
    </div>
  )
}

export default App