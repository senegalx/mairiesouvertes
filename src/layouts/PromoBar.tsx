import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';

export default function PromoBar() {
    const [showPromo, setShowPromo] = useState<boolean>(true);

  return showPromo && (
    <div className="announcement">
        <div className="container-fluid">
            <div className="relative flex items-center justify-between sm:text-center">
            <span className="mx-auto pr-10 text-sm lg:text-[15px]">
                Pellen tesque in ipsum id orci porta dapibus. Sed port titor lectus nibh
                Vivamus. <a href="#?">Learn More</a>
            </span>
            <button
                className="promo-bar-close-btn text-xs min-w-[20px] h-[20px] flex items-center justify-center rounded-full border-2 border-white text-white opacity-80"
                aria-label="close toast button"
                type="button" onClick={() => setShowPromo(false)}>
                <CgClose className="react-icons" width={12} height={12} />
            </button>
            </div>
        </div>
    </div>
  )
}
