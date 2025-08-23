//- libs/message.tsx

import {
  CircleCheck,
  Info,
  Square,
} from "lucide-react";

export const ErrMsg = ({
  type,
  size = 18,
  message = '',
}: {
  type: string,
  size?: number,
  message?: string,
}) => {
  let result;
  const textRed = "text-red-700";

  switch (type) {
    case 'info':
      result = <Info size={size} className={textRed} />;
      break;
    default:
      result = <Square size={size} className={textRed} />;
  }

  if (message) {
    result = (
      <div className="flex justify-start items-center gap-2 py-2">
        {result}
        <span className={`text-sm ${textRed}`}>{message}</span>
      </div>
    );
  }

  return result;
};

export const NotifTimeout = Number(process.env.NEXT_PUBLIC_CONFIG_NOTIF_TIMEOUT ?? 1000);

export const NotifMsg = ({ message = 'Success message'}: {message?: string}) => {
  return (
    <div id="notif-message" className="fixed top-0 left-0 w-screen flex items-center justify-center z-50 text-center py-2 px-4 mt-0.5">
      <div className="p-2 px-2 py-2 bg-orange-50 border border-green-300 items-center leading-none rounded-lg inline-flex transition-all shadow-lg/5" role="alert">
        <CircleCheck className="text-sm text-green-500" />
        <span className="ml-1.5 text-sm text-left text-green-700 flex-auto">{message}</span>
      </div>
    </div>
  );
}
