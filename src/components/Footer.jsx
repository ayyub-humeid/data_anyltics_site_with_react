import React from "react";

function Footer() {
  return (
    <div className="max-w-[1240px] gap-9 mx-auto py-16 px-4 grid lg:grid-cols-3 text-gray-300">
      <div>
        <h1 className="text-[#00df9a] w-full text-3xl font-bold">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          velit fugit ipsam ut quidem omnis repellendus rem tenetur maxime
          obcaecati deserunt a veritatis, praesentium autem eius minus
          voluptates quasi possimus?
        </p>
        <div className="flex md:w-[75%] justify-between my-6">
          <p>fs</p>
          <p>in</p>
          <p>twi</p>
          <p>github</p>
          <p>Drible</p>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h2 className="font-medium text-gray-400">Solutions</h2>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-gray-400">Support</h2>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Api Status</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-gray-400">Company</h2>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-gray-400">Legel</h2>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
