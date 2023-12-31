import './style.scss'

function UserHeader({ userData }) {

    return (
        <>
            {userData ? (
                <>
                    <h1>Bonjour <span className='user-infos__first-name'>{userData.userInfos.firstName}</span></h1>
                    <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
                </>
            ) : (
                `Erreur`
            )}


        </>
    )
}

export default UserHeader