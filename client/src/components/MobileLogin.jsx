function MobileLogin() {
    return (
        <div className="log-in">
            <div className="back">
                <a href="/"><i className="far fa-arrow-alt-circle-left"></i></a>
            </div>
            <div className="log">
                <h1>log in</h1>
                <input type="text" name="username" placeholder="E-mail" required />
                <input type="password" name="password" placeholder="Password" required />
                <button class="btn-next">log in</button>    
            </div>
        </div>
    )
}

export default MobileLogin;