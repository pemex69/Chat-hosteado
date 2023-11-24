import { PrettyChatWindow } from 'react-chat-engine-pretty';
import PropTypes from 'prop-types';


const ChatsPage = (props) => {
    console.log("\nPROPS: " + props);
    return (
        <div style={{
            height: '100vh',
        }}>
            <PrettyChatWindow
                projectId="5364cd84-7ba2-410d-b436-44bdac5c1ca4"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired,
    }).isRequired,
};

export default ChatsPage;





// import PropTypes from 'prop-types';
// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic(
//         '5364cd84-7ba2-410d-b436-44bdac5c1ca4',
//         props.user.username,
//         props.user.secret
//     );
//     return (
//         <div style={{ height: '100vh' }}>
//             <MultiChatSocket {...chatProps} />
//             <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
//         </div>

//     )
// }
// ChatsPage.propTypes = {
//     user: PropTypes.shape({
//         username: PropTypes.string.isRequired,
//         secret: PropTypes.string.isRequired,
//     }).isRequired,
// };
// export default ChatsPage;