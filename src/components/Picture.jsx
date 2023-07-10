import { useDrag } from "react-dnd"
export default function Picture({ url, id }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'image',
        item:{id:id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return (
        <>
            <img ref={drag} src={url} alt="picture" width='150px'  />
        </>
    )
}