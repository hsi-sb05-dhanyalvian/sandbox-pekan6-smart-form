//- libs/message.tsx

import {
  Info,
  MailCheck,
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

export const NotifMsg = ({ message = 'Success message'}: {message?: string}) => {
  return (
    <div id="notif-message" className="fixed top-4 inset-0 z-0 text-center py-4 px-4">
      <div className="p-2 px-6 py-3 bg-form-notif-bg border border-form-notif-border items-center leading-none rounded-full inline-flex animate-bounce transition-all" role="alert">
        <MailCheck className="text-form-notif-text" />
        <span className="ml-3 mr-2 text-left text-form-notif-text flex-auto">{message}</span>
      </div>
    </div>
  );
}