"use client";

import React, { useState } from "react";

import {
  Modal,
  Button,
  Form,
  Fieldset,
  TextField,
  InputGroup,
  Label,
  FieldError,
} from "@heroui/react";
import { FiEdit3, FiUser, FiImage } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { handleUpdateProfile } from "@/app/(auth)/action";

const UpdateProfileModal = ({user}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e) => {
    
    const isSuccess = await handleUpdateProfile(e);
    
    
    if (isSuccess) {
      setIsOpen(false);
    }
  };
  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button onPress={() => setIsOpen(true)} className="bg-[#006A9C] dark:bg-[#0EA5E9] text-white dark:text-slate-950 font-black text-xs rounded-xl shadow-[0_4px_12px_rgba(14,165,233,0.15)] transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0 px-5 h-11 uppercase tracking-widest flex items-center gap-2">
        <FiEdit3 className="text-sm stroke-[2.5]" />
        <span>Edit Profile</span>
      </Button>

      <Modal.Backdrop variant="blur">
        <Modal.Container placement="center" className="max-w-md mx-4">
          <Modal.Dialog className="bg-white dark:bg-[#0f172a] border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden w-full">
            <Modal.CloseTrigger />

            <Form
              onSubmit={handleSubmit}
              className="w-full"
              validationBehavior="native"
            >
              <Modal.Header className="flex flex-col gap-1 text-left pt-6 px-6">
                <span className="text-[20px] font-extrabold tracking-tight text-slate-900 dark:text-slate-100 uppercase leading-none">
                  Update Profile
                </span>
                <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 tracking-wide mt-1">
                  Revise your practitioner credentials and identity avatar link.
                </p>
              </Modal.Header>

              <Modal.Body className="px-6 py-4">
                <Fieldset className="w-full space-y-4">
                  {/* FULL NAME FIELD */}
                  <TextField
                    className="w-full"
                    isRequired
                    name="name"
                    type="text"
                    defaultValue={user?.name}
                    validate={(value) => {
                      if (!value || value.trim().length < 3) {
                        return "Name must be at least 3 characters long";
                      }
                      return null;
                    }}
                  >
                    <Label className="text-[10px] font-extrabold text-slate-800 dark:text-slate-200 tracking-widest uppercase mb-1 block">
                      Full Name
                    </Label>
                    <InputGroup className="group transition-all border border-slate-200/80 dark:border-slate-800/80 focus-within:border-[#006A9C] dark:focus-within:border-[#0EA5E9] focus-within:ring-1 focus-within:ring-[#006A9C] dark:focus-within:ring-[#0EA5E9] rounded-lg overflow-hidden bg-[#eef2f6] dark:bg-slate-900/50">
                      <InputGroup.Prefix className="pl-3.5 text-slate-400 group-focus-within:text-[#006A9C] dark:group-focus-within:text-[#0EA5E9] transition-colors">
                        <FiUser className="size-4" />
                      </InputGroup.Prefix>
                      <InputGroup.Input
                        className="bg-transparent text-[13px] font-semibold text-slate-800 dark:text-slate-200 placeholder:text-slate-400 w-full outline-none"
                        placeholder="Enter your full name"
                      />
                    </InputGroup>
                    <FieldError className="text-xs font-semibold text-rose-500 mt-1 pl-1" />
                  </TextField>

                  {/* PROFILE IMAGE URL FIELD */}
                  <TextField
                    className="w-full"
                    name="image"
                    type="text"
                    defaultValue={user?.image}
                    isRequired
                    validate={(value) => {
                      if (!value || value.trim() === "") {
                        return "Profile image URL is required";
                      }
                      try {
                        new URL(value);
                      } catch (_) {
                        return "Please enter a valid image URL";
                      }
                      return null;
                    }}
                  >
                    <Label className="text-[10px] font-extrabold text-slate-800 dark:text-slate-200 tracking-widest uppercase mb-1 block">
                      Profile Image URL
                    </Label>
                    <InputGroup className="group transition-all border border-slate-200/80 dark:border-slate-800/80 focus-within:border-[#006A9C] dark:focus-within:border-[#0EA5E9] focus-within:ring-1 focus-within:ring-[#006A9C] dark:focus-within:ring-[#0EA5E9] rounded-lg overflow-hidden bg-[#eef2f6] dark:bg-slate-900/50">
                      <InputGroup.Prefix className="pl-3.5 text-slate-400 group-focus-within:text-[#006A9C] dark:group-focus-within:text-[#0EA5E9] transition-colors">
                        <FiImage className="size-4" />
                      </InputGroup.Prefix>
                      <InputGroup.Input
                        className="bg-transparent text-[13px] font-semibold text-slate-800 dark:text-slate-200 placeholder:text-slate-400 w-full outline-none"
                        placeholder="https://example.com/avatar.jpg"
                      />
                    </InputGroup>
                    <FieldError className="text-xs font-semibold text-rose-500 mt-1 pl-1" />
                  </TextField>
                </Fieldset>
              </Modal.Body>

              <Modal.Footer className="px-6 pb-6 pt-2 flex items-center justify-end gap-3">
                <Button
                onPress={() => setIsOpen(false)}
                 
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
            </Form>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateProfileModal;
