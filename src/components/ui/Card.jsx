import PropTypes from "prop-types";

const Card = ({
    children,
}) => {
    return (
        <div
            className={`bg-white border-[1px] border-[#F1F1F2] w-[90%] md:w-[40%] h-[30%] p-2 md:p-8 rounded-lg font-inter`}
            style={{
                boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.08)",
            }}
        >
            {children}
        </div>
    );
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Card;