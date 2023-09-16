import { Button } from "../button/Button";

export const ChooseForm = () => {
  const handleSubmit = (e) => {};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Car brand</p>
        <input></input>
      </label>
      <label>
        <p>Price per hour</p>
        <input></input>
      </label>
      <label>
        <p>Car mileage / km</p>
        <input></input> <input></input>
      </label>
      <Button type={"submit"} text={"Search"} />
    </form>
  );
};
