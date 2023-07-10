import { useState } from 'react';
import Picture from './Picture';
import { useDrop } from 'react-dnd';
const pictureList = [
    {
        id: 1,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9SyhB4FZ38gywEQQ6mX9TQ6rNcSgiLe5EdxUiI0o8KsdSUm3Pedqdh1tyYywmdSZtww&usqp=CAU'
    },
    {
        id: 2,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXfx-K6JJvJAazwotZjmDeF7hZy1Yn-2bVChS_9bwsDPFkS4dmomnFr25B3-2WnJVXm4&usqp=CAU'
    },
    {
        id: 3,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q8SIO9npu3mwvdmQspPMotvaT3TS4_Dsz1nZsvTa-pEp3uSsgKUbswBZnWhiVDX4zy4&usqp=CAU'
    },
    {
        id: 4,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXfx-K6JJvJAazwotZjmDeF7hZy1Yn-2bVChS_9bwsDPFkS4dmomnFr25B3-2WnJVXm4&usqp=CAU'
    },
    {
        id: 5,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD2XMTMytEtBb1CU9yb7_ZHcSQtKlYSoVdXWfaos7ISs-frjGbAsij-Ay9NubVNNRVoDI&usqp=CAU'
    },
    {
        id: 6,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8q8SIO9npu3mwvdmQspPMotvaT3TS4_Dsz1nZsvTa-pEp3uSsgKUbswBZnWhiVDX4zy4&usqp=CAU'
    }
]
export default function DragDrop() {
    const [board, setBoard] = useState([]);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'image',
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))
    const addImageToBoard = (id) => {
        const PictureList = pictureList.filter(picture => id === picture.id);
        setBoard((board) => [...board, PictureList[0]]);
    }
    return (
        <>
            <div className='flex wrap justify-center gap-10 mt-10'>{pictureList.map((picture) => <Picture url={picture.url} id={picture?.id} />)}</div>

            <div className='flex justify-center item-center mt-[3rem]  '><div className='w-[80vw] h-[40vh] border border-white-600 flex wrap gap-4' ref={drop}>
                {board.map((picture) => <div className='h-[50vh] '><Picture url={picture?.url} id={picture?.id} width='500px' /></div>)}
            </div>
            </div>
        </>
    )
}