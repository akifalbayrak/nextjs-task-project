import Image from "next/image";
import classes from "./event-item.module.css";
import Button from "../ui/button";

import DateIcon from "../icons/date-icon";
import AddresIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

export default function EventItem(props) {
    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formattedAddress = location.replace(",", "\n");

    const exploreLink = `/events/${id}`;

    return (
        <li className={classes.item}>
            <Image src={`/` + image} alt={title} width={240} height={160} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddresIcon />
                        <address>{formattedAddress}</address>
                    </div>
                    <div className={classes.actions}>
                        <Button link={exploreLink}>
                            <span>Explore Event</span>
                            <span className={classes.icon}>
                                <ArrowRightIcon />
                            </span>
                        </Button>
                    </div>
                </div>
                <div></div>
            </div>
        </li>
    );
}
