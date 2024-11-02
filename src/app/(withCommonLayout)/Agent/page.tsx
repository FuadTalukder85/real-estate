import React from "react";
import "./agent.css";
import Container from "../../../components/Container/Container";
import Image from "next/image";
import agent01 from "../../../assets/images/teamImg/agent01.jpg";
import agent02 from "../../../assets/images/teamImg/agent02.jpg";
import agent03 from "../../../assets/images/teamImg/agent03.jpg";
import agent04 from "../../../assets/images/teamImg/agent04.jpg";
import { FiPhoneCall } from "react-icons/fi";
import {
  MdChevronLeft,
  MdChevronRight,
  MdOutlineAttachEmail,
} from "react-icons/md";
const AgentPage = () => {
  return (
    <div>
      <div className="agent-banner py-28">
        <h5 className="text-white text-center font-semibold text-4xl">
          ~ Agents ~
        </h5>
      </div>
      <div className="text-center mt-16">
        <b className="uppercase text-[#ffac37]">Our Teams</b>
        <h2 className="text-4xl font-semibold text-[#2A4766]">
          Meet Our Agents
        </h2>
      </div>
      <Container>
        <div className="flex gap-5 mt-10">
          {/* card 01 */}
          <div>
            <div className="relative group overflow-hidden flex items-center justify-center rounded-xl">
              <Image
                src={agent01}
                alt="agent01"
                className="rounded-xl hover:scale-105 transition-all duration-700 ease-in-out"
              ></Image>
              <button className="opacity-0 absolute bottom-0 w-40 h-7 rounded-t-md flex items-center justify-center mx-auto p-5 text-lg font-semibold text-[#2A4766] bg-[#ffffff9c] backdrop-blur-sm group-hover:opacity-100 scale-105 transition-all duration-700 ease-in-out">
                More Details
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div>
                <p className="text-2xl text-[#2A4766]">Rihana</p>
                <span className="text-[#ABACB0]">Administrative Staff</span>
              </div>
              <ul className="flex gap-3 text-[#ABACB0] text-lg">
                <li className="p-3 border rounded-full">
                  <FiPhoneCall />
                </li>
                <li className="p-3 border rounded-full">
                  <MdOutlineAttachEmail />
                </li>
              </ul>
            </div>
          </div>
          {/* card 02 */}
          <div>
            <div className="relative group overflow-hidden flex items-center justify-center rounded-xl">
              <Image
                src={agent02}
                alt="agent01"
                className="rounded-xl hover:scale-105 transition-all duration-700 ease-in-out"
              ></Image>
              <button className="opacity-0 absolute bottom-0 w-40 h-7 rounded-t-md flex items-center justify-center mx-auto p-5 text-lg font-semibold text-[#2A4766] bg-[#ffffff9c] backdrop-blur-sm group-hover:opacity-100 scale-105 transition-all duration-700 ease-in-out">
                More Details
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div>
                <p className="text-2xl text-[#2A4766]">Rihana</p>
                <span className="text-[#ABACB0]">Administrative Staff</span>
              </div>
              <ul className="flex gap-3 text-[#ABACB0] text-lg">
                <li className="p-3 border rounded-full">
                  <FiPhoneCall />
                </li>
                <li className="p-3 border rounded-full">
                  <MdOutlineAttachEmail />
                </li>
              </ul>
            </div>
          </div>
          {/* card 03 */}
          <div>
            <div className="relative group overflow-hidden flex items-center justify-center rounded-xl">
              <Image
                src={agent03}
                alt="agent01"
                className="rounded-xl hover:scale-105 transition-all duration-700 ease-in-out"
              ></Image>
              <button className="opacity-0 absolute bottom-0 w-40 h-7 rounded-t-md flex items-center justify-center mx-auto p-5 text-lg font-semibold text-[#2A4766] bg-[#ffffff9c] backdrop-blur-sm group-hover:opacity-100 scale-105 transition-all duration-700 ease-in-out">
                More Details
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div>
                <p className="text-2xl text-[#2A4766]">Rihana</p>
                <span className="text-[#ABACB0]">Administrative Staff</span>
              </div>
              <ul className="flex gap-3 text-[#ABACB0] text-lg">
                <li className="p-3 border rounded-full">
                  <FiPhoneCall />
                </li>
                <li className="p-3 border rounded-full">
                  <MdOutlineAttachEmail />
                </li>
              </ul>
            </div>
          </div>
          {/* card 04 */}
          <div>
            <div className="relative group overflow-hidden flex items-center justify-center rounded-xl">
              <Image
                src={agent04}
                alt="agent01"
                className="rounded-xl hover:scale-105 transition-all duration-700 ease-in-out"
              ></Image>
              <button className="opacity-0 absolute bottom-0 w-40 h-7 rounded-t-md flex items-center justify-center mx-auto p-5 text-lg font-semibold text-[#2A4766] bg-[#ffffff9c] backdrop-blur-sm group-hover:opacity-100 scale-105 transition-all duration-700 ease-in-out">
                More Details
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div>
                <p className="text-2xl text-[#2A4766]">Rihana</p>
                <span className="text-[#ABACB0]">Administrative Staff</span>
              </div>
              <ul className="flex gap-3 text-[#ABACB0] text-lg">
                <li className="p-3 border rounded-full">
                  <FiPhoneCall />
                </li>
                <li className="p-3 border rounded-full">
                  <MdOutlineAttachEmail />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          {/* card 01 */}
          <div>
            <div className="relative group overflow-hidden flex items-center justify-center rounded-xl">
              <Image
                src={agent01}
                alt="agent01"
                className="rounded-xl hover:scale-105 transition-all duration-700 ease-in-out"
              ></Image>
              <button className="opacity-0 absolute bottom-0 w-40 h-7 rounded-t-md flex items-center justify-center mx-auto p-5 text-lg font-semibold text-[#2A4766] bg-[#ffffff9c] backdrop-blur-sm group-hover:opacity-100 scale-105 transition-all duration-700 ease-in-out">
                More Details
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div>
                <p className="text-2xl text-[#2A4766]">Rihana</p>
                <span className="text-[#ABACB0]">Administrative Staff</span>
              </div>
              <ul className="flex gap-3 text-[#ABACB0] text-lg">
                <li className="p-3 border rounded-full">
                  <FiPhoneCall />
                </li>
                <li className="p-3 border rounded-full">
                  <MdOutlineAttachEmail />
                </li>
              </ul>
            </div>
          </div>
          {/* card 02 */}
          <div>
            <div className="relative group overflow-hidden flex items-center justify-center rounded-xl">
              <Image
                src={agent02}
                alt="agent01"
                className="rounded-xl hover:scale-105 transition-all duration-700 ease-in-out"
              ></Image>
              <button className="opacity-0 absolute bottom-0 w-40 h-7 rounded-t-md flex items-center justify-center mx-auto p-5 text-lg font-semibold text-[#2A4766] bg-[#ffffff9c] backdrop-blur-sm group-hover:opacity-100 scale-105 transition-all duration-700 ease-in-out">
                More Details
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div>
                <p className="text-2xl text-[#2A4766]">Rihana</p>
                <span className="text-[#ABACB0]">Administrative Staff</span>
              </div>
              <ul className="flex gap-3 text-[#ABACB0] text-lg">
                <li className="p-3 border rounded-full">
                  <FiPhoneCall />
                </li>
                <li className="p-3 border rounded-full">
                  <MdOutlineAttachEmail />
                </li>
              </ul>
            </div>
          </div>
          {/* card 03 */}
          <div>
            <div className="relative group overflow-hidden flex items-center justify-center rounded-xl">
              <Image
                src={agent03}
                alt="agent01"
                className="rounded-xl hover:scale-105 transition-all duration-700 ease-in-out"
              ></Image>
              <button className="opacity-0 absolute bottom-0 w-40 h-7 rounded-t-md flex items-center justify-center mx-auto p-5 text-lg font-semibold text-[#2A4766] bg-[#ffffff9c] backdrop-blur-sm group-hover:opacity-100 scale-105 transition-all duration-700 ease-in-out">
                More Details
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div>
                <p className="text-2xl text-[#2A4766]">Rihana</p>
                <span className="text-[#ABACB0]">Administrative Staff</span>
              </div>
              <ul className="flex gap-3 text-[#ABACB0] text-lg">
                <li className="p-3 border rounded-full">
                  <FiPhoneCall />
                </li>
                <li className="p-3 border rounded-full">
                  <MdOutlineAttachEmail />
                </li>
              </ul>
            </div>
          </div>
          {/* card 04 */}
          <div>
            <div className="relative group overflow-hidden flex items-center justify-center rounded-xl">
              <Image
                src={agent04}
                alt="agent01"
                className="rounded-xl hover:scale-105 transition-all duration-700 ease-in-out"
              ></Image>
              <button className="opacity-0 absolute bottom-0 w-40 h-7 rounded-t-md flex items-center justify-center mx-auto p-5 text-lg font-semibold text-[#2A4766] bg-[#ffffff9c] backdrop-blur-sm group-hover:opacity-100 scale-105 transition-all duration-700 ease-in-out">
                More Details
              </button>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div>
                <p className="text-2xl text-[#2A4766]">Rihana</p>
                <span className="text-[#ABACB0]">Administrative Staff</span>
              </div>
              <ul className="flex gap-3 text-[#ABACB0] text-lg">
                <li className="p-3 border rounded-full">
                  <FiPhoneCall />
                </li>
                <li className="p-3 border rounded-full">
                  <MdOutlineAttachEmail />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-16 justify-end">
          <button className="bg-white border border-gray-200 p-3 rounded-md shadow-md">
            <MdChevronLeft className="text-2xl text-[#ffac37]" />
          </button>
          <button className="bg-[#ffac37] p-3 rounded-md shadow-md">
            <MdChevronRight className="text-2xl text-white" />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default AgentPage;
