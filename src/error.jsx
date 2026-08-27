import react from "react";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError() {
    return {
      hasError: True,
    };
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }
  render() {
    if (hasError) {
      return <h1>something went Wrong</h1>;
    } else {
      return this.props.children;
    }
  }
}
