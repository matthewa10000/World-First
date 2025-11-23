import React from "react";

const Partners = ({ data }) => {
    return (
        <div id={data.id}>
            <div className="content-wrap pt-20 pb-9 md:pb-16">
                <h3 className="sub-title pb-5">{data.section_title}</h3>
                <h2 className="section-title">{data.title}</h2>

                <div className="grid grid-cols-2 md:grid-cols-4">
                    {data.partners.map((partner) => (
                        <div
                            key={partner.id}
                            className="h-52 flex items-center justify-center"
                        >
                            <img
                                src={partner.img}
                                alt={partner.alt}
                                className="min-h-[140px] max-h-[140px] object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
