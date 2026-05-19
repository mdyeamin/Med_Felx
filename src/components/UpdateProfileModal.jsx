"use client";

import React from "react";

import { Modal, Button, Input } from "@heroui/react";
import { FiEdit3, FiUser, FiImage } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

const UpdateProfileModal = () => {
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    console.log("Profile data updated successfully");
  };

  return (
    <Modal>
      <Button className="bg-[#006A9C] dark:bg-[#0EA5E9] text-white dark:text-slate-950 font-black text-xs rounded-xl shadow-[0_4px_12px_rgba(14,165,233,0.15)] transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0 px-5 h-11 uppercase tracking-widest flex items-center gap-2">
        <FiEdit3 className="text-sm stroke-[2.5]" />
        <span>Edit Profile</span>
      </Button>

      <Modal.Backdrop variant="blur">
        <Modal.Container placement="center" className="max-w-md mx-4">
          <Modal.Dialog className="bg-white dark:bg-[#0f172a] border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden w-full">
            <Modal.CloseTrigger />

            <form onSubmit={handleUpdateSubmit} className="w-full">
              <Modal.Header className="flex flex-col gap-1 text-left pt-6 px-6">
                <span className="text-[20px] font-extrabold tracking-tight text-slate-900 dark:text-slate-100 uppercase leading-none">
                  Update Profile
                </span>
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wide mt-1">
                  Revise your practitioner credentials and identity avatar link.
                </p>
              </Modal.Header>

              <Modal.Body className="px-6 py-4 space-y-4">
                <div className="w-full text-left">
                  <label className="text-[10px] font-black text-slate-500 dark:text-slate-400 tracking-widest uppercase mb-1.5 block">
                    Full Name
                  </label>
                  <Input
                    name="name"
                    type="text"
                    isRequired
                    placeholder="Enter your full name"
                    variant="flat"
                    radius="xl"
                    startContent={
                      <FiUser className="text-slate-400 size-4 shrink-0" />
                    }
                    classNames={{
                      inputWrapper:
                        "bg-[#eef2f6] dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 group-data-[focus=true]:border-[#006A9C] dark:group-data-[focus=true]:border-[#0EA5E9] h-12 px-4 transition-all",
                      input:
                        "text-[13px] font-bold text-slate-800 dark:text-slate-200 placeholder:text-slate-400/60",
                    }}
                  />
                </div>

                <div className="w-full text-left">
                  <label className="text-[10px] font-black text-slate-500 dark:text-slate-400 tracking-widest uppercase mb-1.5 block">
                    Profile Image URL
                  </label>
                  <Input
                    name="image"
                    type="url"
                    isRequired
                    placeholder="https://example.com/avatar.jpg"
                    variant="flat"
                    radius="xl"
                    startContent={
                      <FiImage className="text-slate-400 size-4 shrink-0" />
                    }
                    classNames={{
                      inputWrapper:
                        "bg-[#eef2f6] dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 group-data-[focus=true]:border-[#006A9C] dark:group-data-[focus=true]:border-[#0EA5E9] h-12 px-4 transition-all",
                      input:
                        "text-[13px] font-bold text-slate-800 dark:text-slate-200 placeholder:text-slate-400/60",
                    }}
                  />
                </div>
              </Modal.Body>

              <Modal.Footer className="px-6 pb-6 pt-2 flex items-center justify-end gap-3">
                <Button
                  slot="close"
                  className="bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-500 dark:text-slate-400 font-bold text-xs rounded-xl h-11 px-5 uppercase tracking-wider outline-none transition-colors"
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  className="bg-[#006A9C] dark:bg-[#0EA5E9] text-white dark:text-slate-950 font-black text-xs rounded-xl shadow-[0_4px_12px_rgba(14,165,233,0.15)] transition-all hover:scale-[1.02] active:scale-[0.98] h-11 px-5 uppercase tracking-wider flex items-center gap-2"
                >
                  <span>Save Changes</span>
                  <FaArrowRight className="text-[10px]" />
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateProfileModal;
