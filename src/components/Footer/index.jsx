import AppContext from "../../context/AppContext";

const Footer = () => {
  return (
    <AppContext.Consumer>
      {({ todos }) => (
        <div className="flex justify-between items-center">
          <div className="text-2xl">{todos.length ?? 0} Tasks</div>
          <div className="text-2xl">Todo app</div>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default Footer;
