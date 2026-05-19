"use client";

import { deleteAppointment } from "@/app/lib/action";
import { AlertDialog, Button } from "@heroui/react";
import { FiTrash2 } from "react-icons/fi";

const BookedDataDeleteModal = ({ id }) => {
  const handleDelete = async () => {
    await deleteAppointment(id);
  };

  return (
    <AlertDialog>
      {/* ── TRIGGER BUTTON ── */}
      <Button className="h-[36px] w-full rounded-lg bg-rose-50 dark:bg-rose-500/10 text-[13px] font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-500/20 flex items-center justify-center gap-2 transition-colors cursor-pointer">
        <FiTrash2 className="text-sm" />
        Cancel
      </Button>

      <AlertDialog.Backdrop variant="blur">
        <AlertDialog.Container placement="center">
          <AlertDialog.Dialog className="sm:max-w-[400px] bg-white dark:bg-[#151e32] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl">
            <AlertDialog.CloseTrigger />

            {/* ── HEADER ── */}
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className="text-slate-900 dark:text-slate-100 font-extrabold">
                Cancel Appointment?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            {/* ── BODY ── */}
            <AlertDialog.Body>
              <p className="text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed">
                Are you sure you want to cancel this booked appointment? This
                action cannot be undone and the slot will be freed for other
                patients.
              </p>
            </AlertDialog.Body>

            {/* ── FOOTER ── */}
            <AlertDialog.Footer className="mt-2">
              <Button
                slot="close"
                variant=""
                className="h-[36px] rounded-lg border border-slate-200 dark:border-slate-700 text-[13px] font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center gap-2 transition-colors"
              >
                No, Keep it
              </Button>

              <Button
                onClick={handleDelete}
               
                variant=""
                className="h-[36px] w-full rounded-lg bg-rose-50 dark:bg-rose-500/10 text-[13px] font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-500/20 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                Yes, Cancel it
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default BookedDataDeleteModal;
