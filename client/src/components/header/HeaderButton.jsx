import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import { colors } from '@mui/material';
import { useCallback } from 'react';

const HeaderButton = ({ icon, selected, setSelected }) => {

    const color = (selected === icon) ? 'text-white' : 'text-black/75'

    const icons = {
        home: <HomeOutlinedIcon className={color} />,
        faqs: <QuizOutlinedIcon className={color} />,
        counlist: <Groups2OutlinedIcon className={color} />,
        news: <FeedOutlinedIcon className={color} />,
        noti: <NotificationsNoneOutlinedIcon className={color} />,
        message: <QuestionAnswerOutlinedIcon className={color} />
    }

    const btnOnClick = useCallback(() => {
        setSelected(icon)
    }, [setSelected, icon])


    return (
        <div
            className={`${(selected === icon) ? 'bg-blue-500' : ''} h-[36px] w-[36px]  flex justify-center items-center rounded-lg duration-300 cursor-pointer`}
            onClick={btnOnClick}>
            {icons[icon]}
        </div>
    );
}

export default HeaderButton;
