import React from "react";
import { apiGetTodos, apiToggleTodos, MONTHS, YEARS } from "./api/api";
import Select from "./components/Select";
import Spinner from "./components/Spinner";
import Summary from "./components/Summary";
import Todos from "./components/Todos";

export default function App() {
  const [selectedYear, setSelectedYear] = React.useState(YEARS[1].value);
  const [selectedMonths, setSelectedMonths] = React.useState(MONTHS[0].value);
  const [todos, setTodos] = React.useState([]);
  const [loadingData, setLoadingData] = React.useState(true);

  React.useEffect(() => {
    document.title = "React Todos's";
  }, []);

  React.useEffect(() => {
    async function getFilteredTodos() {
      setLoadingData(true);
      const filteredTodos = await apiGetTodos(selectedYear, selectedMonths);

      setTimeout(() => {
        setTodos(filteredTodos);
        setLoadingData(false);
      }, 1000);
    }

    getFilteredTodos();
  }, [selectedYear, selectedMonths]);

  function handleClickYear(newYear) {
    setSelectedYear(newYear);
  }

  function handleClickMonths(newMonth) {
    setSelectedMonths(newMonth);
  }

  function handleToggle(todo) {
    const { id, done } = todo;

    const didUptade = apiToggleTodos(todo);

    if (didUptade) {
      const newTodo = [...todos];
      const index = todos.findIndex((todo) => todo.id === id);
      newTodo[index].done = !done;

      setTodos(newTodo);
    }
  }

  const { header, selectStyle } = stylers;

  return (
    <div className="container">
      <h1 className="center">React todo's</h1>
      <div style ={header}>
        <span style={selectStyle}>Ano: </span>
        <Select
          values={YEARS}
          selectValue={selectedYear}
          onChange={handleClickYear}
        />
        <span style={selectStyle}>Mês: </span>
        <Select
          values={MONTHS}
          selectValue={selectedMonths}
          onChange={handleClickMonths}
        />
      </div>

      {loadingData && <Spinner/>}
      {!loadingData && (
        <>
          <Summary>{todos}</Summary>
          <Todos onToggle={handleToggle}>{todos}</Todos>
        </>
      )}
    </div>
  );
}


const stylers = {
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '30px 0',
  },
  selectStyle: {
    fontSize: '18px', 
    fontWeight: 'bold',
  }
}
