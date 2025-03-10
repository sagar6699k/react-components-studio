interface DividerProps {
  text?: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => (
  <div className="flex items-center my-8">
    <div className="flex-grow border-t border-gray-200"></div>
    {text && <span className="mx-3 text-gray-400 text-sm">{text}</span>}
    <div className="flex-grow border-t border-gray-200"></div>
  </div>
);

export default Divider;
