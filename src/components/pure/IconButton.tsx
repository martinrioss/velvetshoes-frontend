interface IconButtonProps {
  icon: string;
  className?: string;
  onClick?: VoidFunction;
}

export default function IconButton({ icon, className, onClick }: IconButtonProps) {
  return (
    <button className={'btn btn-ghost btn-circle ' + className} onClick={onClick}>
      <span className="material-symbols-rounded">{icon}</span>
    </button>
  );
}
