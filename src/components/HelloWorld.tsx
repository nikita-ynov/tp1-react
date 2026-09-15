function HelloWorld(props: { name: string }) {
    let { name } = props;
    return (
        <div>Hello {name}</div>
    );
}

export default HelloWorld;