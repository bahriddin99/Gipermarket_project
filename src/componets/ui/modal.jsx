import { Dialog } from "@headlessui/react";

export const MyDialog = ({ Opened, setOpend, children }) => {
  return (
    <Dialog
      open={Opened}
      onClose={() => setOpend(false)}
      className="relative z-50 p-3"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white">
          <Dialog.Title>Complete your order</Dialog.Title>
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
