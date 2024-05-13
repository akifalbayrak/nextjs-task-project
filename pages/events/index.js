import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

export default function AllEventsPage(props) {
    const { events } = props;
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullpath = `/events/${year}/${month}`;
        router.push(fullpath);
    }
    return (
        <div>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </div>
    );
}

export async function getStaticProps() {
    const allEvents = getAllEvents();
    return {
        props: {
            events: allEvents,
        },
        revalidate: 60,
    };
}
