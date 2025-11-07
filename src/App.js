import { useState } from "react";
import Banner from "./component/banner";
import Form from "./component/form";
import Team from "./component/team";
import Footer from "./component/footer";

function App() {
   const teams = [
    {
      name: 'Programmer',
      primaryColor: '#57C278',
      secundaryColor: '#D9F7E9',
    },{
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secundaryColor: '#E8F8FF',
    },{
      name: 'Data Science',
      primaryColor: '#A6D157',
      secundaryColor: '#F0F8E2',
    },{
      name: 'DevOps',
      primaryColor: '#E06B69',
      secundaryColor: '#FDE7E8',
    },{
      name: 'UX/UI',
      primaryColor: '#DB6EBF',
      secundaryColor: '#FAE9F5',
    },{
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secundaryColor: '#FFF5D9',
    },{
      name: 'Inovations',
      primaryColor: '#FF8A29',
      secundaryColor: '#FFEEDF',
    },
  ];
  const  [persons, setPersons] = useState([])
  const onPersonAdded = (person) => {
    setPersons([...persons, person])
  }
  return (
    <div className="App">
      <Banner />
      <Form teamsName={teams.map((t) => t.name)} onPersonSaved={person => onPersonAdded(person)}/>
      {teams.map(t => 
        <Team 
          key={t.name} 
          name={t.name} 
          primaryColor={t.primaryColor} 
          secundaryColor={t.secundaryColor}
          colaborate={persons.filter((search) => search.team === t.name)}
        />
      )}
      <Footer/>
    </div>
  );
}

export default App;
