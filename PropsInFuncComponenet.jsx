function PropsInFuncComponent(props){
    return(
        <div>
            <h2>Hello {props.name} </h2>
            <h3>Email: {props.email} </h3>
            <h4>Salary: {props.info.Salary} </h4>
            <h5>mobile: {props.info.mobile} </h5>
            <h5>age: {props.info.age} </h5>


        </div>
    )

}
export default PropsInFuncComponent;