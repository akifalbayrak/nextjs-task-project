import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

export default function AllEventsPage() {
    const event = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year, month) {
        const fullpath = `/events/${year}/${month}`;
        router.push(fullpath);
    }
    return (
        <div>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={event} />
        </div>
    );
}
