import Link from 'next/Link'

export default function Header(){
    return (
        <header>
            <nav>
            <Link href="/">
                <div className="logo">
                <svg className="lightbulb" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} xmlns="https://loading.io/icon/ny8q2d" />
                </svg>
                <h1>ImHungry!</h1>
                </div>
            </Link>
            <Link href="/about" className="link"><a>About!</a></Link>
            <Link href="/hunger" className="link"><a>HungerGenerator!</a></Link>
            </nav>
            <div className="button-group">
                <button className="sign-up">
                    Sign Up
                </button>
                <button className="sign-up">
                    Sign In
                </button>
            </div>
            <style jsx>{`
              /* ADD YOUR STYLES HERE */
              header {
                  color: #1d3557;
                  background-color: white;
                  display: flex;
                  justify-content:space-between;
                }
              .lightbulb{
                height: 60px;
                width: 60px;
                padding-left: 20px;
                padding-top: 10px;
              }
              .logo{
                display: flex;
                padding: 0px;
              }
              h1{
                margin:15px;
                font-weight: 675;
              }
              nav{
                display: flex;
              }
              a{
                padding: 22px 10px 10px 10px;
                font-weight:500;
              }
              .button-group{
                margin:20px;
              }
              .search-button{
                margin-right:10px;
              }
              .sign-up{
                border-radius: 5px;
                height:40px;
                width:75px;
                border-color: #1d3557;
                border-width: 2.5px;
                margin-right: 5px;
              }
            `}</style>
        </header>
    )
}