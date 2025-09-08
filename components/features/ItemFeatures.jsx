import Link from "next/link";
import React from "react";

const ItemFeatures = ({ data, index, delay }) => {
  // Define background colors and border radius based on original CSS
  const getItemClasses = () => {
    switch(index) {
      case 'one':
        return 'bg-[#1A3D7D] rounded-l-[3px]';
      case 'two':
        return 'bg-[#194f90]';
      case 'three':
        return 'bg-[#13ADE5] rounded-r-[3px]';
      default:
        return 'bg-[#1A3D7D]';
    }
  };

  // Define the large pseudo-element icon content based on original CSS
  const getPseudoIcon = () => {
    switch(index) {
      case 'one':
        return '\uF111'; // flaticon content for "one"
      case 'two':
        return '\uF136'; // flaticon content for "two"
      case 'three':
        return '\uF117'; // flaticon content for "three"
      default:
        return '';
    }
  };

  return (
    <div className={`features-item ${index} ${getItemClasses()} text-white relative overflow-hidden px-10 py-12 transition-all duration-300 group`}>
      {/* Large background pseudo-element icon */}
      <div 
        className="absolute top-[10px] right-[-75px] text-[160px] opacity-10 leading-none transform rotate-[35deg] transition-all duration-300 group-hover:rotate-0"
        style={{ fontFamily: 'flaticon' }}
      >
        {getPseudoIcon()}
      </div>
      
      {/* Main icon - floated left */}
      <i className={`features-icon wow fadeInUp ${data.icon} text-[40px] leading-none float-left group-hover:animate-pulse`} data-wow-delay={delay}></i>
      
      {/* Text content with left padding */}
      <div className="item-text wow fadeInUp pl-[60px]" data-wow-delay={delay}>
        <h4 className="capitalize text-2xl leading-tight font-semibold mb-[18px] text-white">{data.title}</h4>
        <p className="text-white mb-[18px] leading-relaxed">{data.description}</p>
        
        {data.type == "phone" && (
          <Link className="phone text-2xl leading-none font-rajdhani text-left border-none text-white hover:text-[#13ADE5] transition-colors duration-300" href={data.contact.href}>
            <i className={`${data.contact.icon} text-xl border-2 border-white rounded-[3px] w-10 h-10 inline-block text-center leading-[45px] align-middle mr-[6px] hover:text-[#13ADE5] hover:border-[#13ADE5] transition-all duration-300`}></i>
            {data.contact.text}
          </Link>
        )}
        
        {data.type == "button" && (
          <Link className={`${data.link.className} relative capitalize text-[15px] inline-block border border-white rounded-[3px] font-semibold min-w-[180px] h-10 leading-[36px] text-center text-white hover:text-[#13ADE5] hover:border-[#13ADE5] transition-all duration-300`} href={data.link.href}>
            {data.link.text}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemFeatures;
