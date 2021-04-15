import '../css/main.css'

function MobileRegister1(){
    return (
        <div className="register">
            <div className="back">
                <a href="/"><i class="far fa-arrow-alt-circle-left"></i></a>
            </div>
            <div className="reg">
                <h1>register</h1>
                <input type="text" name="username" placeholder="E-mail" required />
                <input type="password" name="password" placeholder="Password" required />
                <button className="btn-next">next</button>
            </div>
        </div>
    )
}

export default MobileRegister1;