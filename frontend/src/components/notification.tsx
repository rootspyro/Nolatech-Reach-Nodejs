interface props {
  message: string;
  visible: boolean;
}

export default function Notification(props: props) {
  const {
    message,
    visible
  } = props;

  return(
    <div className={`z-20 w-full fixed top-0 ${ visible ? "" : "hidden" }`}>
      <div className="w-full flex justify-end p-5">
        <div className="bg-white rounded shadow-lg p-3 flex justify-start">
          <span className="text-gray-dark text-base">{message}</span>
        </div>
      </div>
    </div>
  )
}
