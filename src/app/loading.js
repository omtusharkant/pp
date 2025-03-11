export default function LoadingS() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-black rounded-full animate-bounce"></div>
      </div>
</div>
    );
  }