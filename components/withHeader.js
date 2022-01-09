import Header from "./Header";

const withHeader = (WrappedComponent) => {
	function HOC(props) {
		return (
			<div className="px-8 ">
				<Header />
				<WrappedComponent {...props} />
			</div>
		);
	}

	return HOC;
};

export default withHeader;
