function Main(props) {
    const { children } = props;
    return (
        <main className="flex flex-col flex-1">
            {children}
        </main>
    );
}

export default Main;