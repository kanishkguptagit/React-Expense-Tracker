import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const deleteHandler = () => {
    props.onDelete(props.id);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <div onClick={deleteHandler} className="closediv"><span>&times;</span></div>
    </Card>
  );
};

export default ExpenseItem;
