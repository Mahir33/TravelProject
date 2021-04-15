import '../css/main.css'

function MobileRegister2(){
    return (
        <div className="register">
        <div className="back">
            <a href="/"><i class="far fa-arrow-alt-circle-left"></i></a>
        </div>
        <div className="reg">
            <h1>register</h1>
            <input type="text" name="username" placeholder="Username" required />
            <button className="btn-next">sign up</button>
        </div>
    </div>
    )
}

export default MobileRegister2;