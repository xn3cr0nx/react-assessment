import Actions from "actions";
import { connect } from "react-redux";
import AppRouter from "components/AppRouter.jsx";

const mapStateToProps = state => {
  return {
  };
};
// auth: state.auth

const mapDispatchToProps = dispatch => {
  return {};
};

const AppRouterContainer = connect(mapStateToProps, mapDispatchToProps)(
  AppRouter
);

export default AppRouterContainer;
