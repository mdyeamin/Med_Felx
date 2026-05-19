"use client";

import React from "react";
import {
  Modal,
  Button,
  Form,
  Fieldset,
  FieldGroup,
  TextField,
  Label,
  Input,
} from "@heroui/react";
import { FiCalendar, FiX } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

const BookingModal = () => {
  const inputWrapperCls =
    "h-[42px] w-full px-3.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 focus-within:border-[#006A9C] dark:focus-within:border-[#0EA5E9] focus-within:ring-1 focus-within:ring-[#006A9C] dark:focus-within:ring-[#0EA5E9]/30 transition-all flex items-center shadow-sm dark:shadow-none";

  const inputTextCls =
    "bg-transparent text-[14px] text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none w-full";

  const labelCls =
    "block text-[12px] font-bold text-slate-600 dark:text-slate-400 mb-1.5";

  return (
    <>
      <style>{`
        [data-booking-modal] {
          width: min(640px, calc(100vw - 32px)) !important;
          max-width: min(640px, calc(100vw - 32px)) !important;
        }
      `}</style>

      <Modal scrollBehavior="inside">
        {/* TRIGGER */}
        <Button
          className="w-full h-12 bg-[#006A9C] dark:bg-[#0EA5E9] text-white dark:text-slate-950 font-bold text-sm rounded-xl shadow-[0_4px_12px_rgba(0,106,156,0.15)] transition-all duration-200 hover:bg-[#005B84] dark:hover:bg-[#38bdf8] uppercase tracking-wider gap-2"
          startContent={<FiCalendar className="text-lg" />}
        >
          Book Appointment
        </Button>

        <Modal.Backdrop variant="blur">
          <Modal.Container
            placement="center"
            data-booking-modal
            className={[
              "!w-[min(640px,calc(100vw-32px))]",
              "!max-w-[min(640px,calc(100vw-32px))]",
              "mx-4",
            ].join(" ")}
          >
            <Modal.Dialog
              data-booking-modal
              className="bg-white dark:bg-[#0f172a] rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden w-full border border-slate-200 dark:border-slate-800 !max-w-none max-h-[90vh] flex flex-col"
            >
              {/* ── BODY ── */}
              <Form
                validationBehavior="native"
                className="w-full flex flex-col h-full"
              >
                <Fieldset className="w-full h-full flex flex-col">
                  {/* ── HEADER ── */}
                  <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0 w-full">
                    <Fieldset.Legend className="text-[19px] font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                      Book Appointment
                    </Fieldset.Legend>
                    <Modal.CloseTrigger asChild>
                      <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer outline-none"
                      >
                        <FiX className="text-xl" />
                      </button>
                    </Modal.CloseTrigger>
                  </div>

                  {/* ── INPUT FIELDS (Scrollable Area) ── */}
                  <div className="p-6 space-y-4 overflow-y-auto flex-1 w-full">
                    {/* ROW 1 — Selected Doctor | User Email */}
                    <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 w-full">
                      <TextField name="doctorName" className="w-full">
                        <Label className={labelCls}>Selected Doctor</Label>
                        <Input
                          placeholder="Dr. Ayesha Rahman"
                          classNames={{
                            inputWrapper: inputWrapperCls,
                            input: inputTextCls,
                          }}
                        />
                      </TextField>

                      <TextField
                        name="userEmail"
                        type="email"
                        className="w-full"
                      >
                        <Label className={labelCls}>User Email</Label>
                        <Input
                          placeholder="patient@example.com"
                          classNames={{
                            inputWrapper: inputWrapperCls,
                            input: inputTextCls,
                          }}
                        />
                      </TextField>
                    </FieldGroup>

                    {/* ROW 2 — Full Name | Phone Number */}
                    <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 w-full">
                      <TextField name="patientName" className="w-full">
                        <Label className={labelCls}>Full Name</Label>
                        <Input
                          placeholder="John Doe"
                          classNames={{
                            inputWrapper: inputWrapperCls,
                            input: inputTextCls,
                          }}
                        />
                      </TextField>

                      <TextField name="phone" type="tel" className="w-full">
                        <Label className={labelCls}>Phone Number</Label>
                        <Input
                          placeholder="+880 1..."
                          classNames={{
                            inputWrapper: inputWrapperCls,
                            input: inputTextCls,
                          }}
                        />
                      </TextField>
                    </FieldGroup>

                    {/* ROW 3 — Date | Time | Gender */}
                    <FieldGroup className="grid grid-cols-1 sm:grid-cols-3 gap-x-5 gap-y-4 w-full">
                      <TextField
                        name="appointmentDate"
                        type="date"
                        className="w-full"
                      >
                        <Label className={labelCls}>Date</Label>
                        <div className={inputWrapperCls}>
                          <input
                            name="appointmentDate"
                            type="date"
                            className={`${inputTextCls} [color-scheme:light] dark:[color-scheme:dark]`}
                          />
                        </div>
                      </TextField>

                      <TextField
                        name="appointmentTime"
                        type="time"
                        className="w-full"
                      >
                        <Label className={labelCls}>Time</Label>
                        <div className={inputWrapperCls}>
                          <input
                            name="appointmentTime"
                            type="time"
                            defaultValue="10:00"
                            className={`${inputTextCls} [color-scheme:light] dark:[color-scheme:dark]`}
                          />
                        </div>
                      </TextField>

                      <div className="w-full flex flex-col">
                        <Label className={labelCls}>Gender</Label>
                        <select
                          name="gender"
                          defaultValue="Male"
                          className={`${inputWrapperCls} ${inputTextCls} cursor-pointer appearance-none bg-no-repeat bg-[right_14px_center]`}
                        >
                          <option value="Male" className="dark:bg-slate-800">
                            Male
                          </option>
                          <option value="Female" className="dark:bg-slate-800">
                            Female
                          </option>
                          <option value="Other" className="dark:bg-slate-800">
                            Other
                          </option>
                        </select>
                      </div>
                    </FieldGroup>
                  </div>

                  {/* ── FOOTER ── */}
                  <Fieldset.Actions className="border-t border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-end gap-3 shrink-0 w-full bg-slate-50/50 dark:bg-transparent">
                    <Modal.CloseTrigger asChild>
                      <button
                        type="button"
                        className=" flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer outline-none"
                      >
                        <IoIosClose className="text-2xl" />
                      </button>
                    </Modal.CloseTrigger>

                    <button
                      type="submit"
                      className="h-[38px] px-5 rounded-lg bg-[#006A9C] dark:bg-[#0EA5E9] text-white dark:text-slate-950 text-[13px] font-bold hover:bg-[#005B84] dark:hover:bg-[#38bdf8] transition-all cursor-pointer shadow-sm"
                    >
                      Confirm Appointment
                    </button>
                  </Fieldset.Actions>
                </Fieldset>
              </Form>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};

export default BookingModal;
