const activities = [
  {
    title: "Intramural Sports",
    description: "Year-round sports competitions between colleges and departments",
    image: "/intramural-sports-competition.png",
    schedule: "Every Weekend",
    participants: "2000+",
  },
  {
    title: "Cultural Festivals",
    description: "Celebrate diversity through music, dance, food, and traditional arts",
    image: "/cultural-festival-performance.png",
    schedule: "Monthly",
    participants: "5000+",
  },
  {
    title: "Academic Competitions",
    description: "Quiz bees, debates, case competitions, and research presentations",
    image: "/academic-competition-students.png",
    schedule: "Quarterly",
    participants: "1500+",
  },
  {
    title: "Community Service",
    description: "Volunteer opportunities in local communities and environmental projects",
    image: "/students-community-service.png",
    schedule: "Weekly",
    participants: "3000+",
  },
  {
    title: "Leadership Training",
    description: "Workshops and seminars to develop leadership skills and capabilities",
    image: "/leadership-training-workshop.png",
    schedule: "Monthly",
    participants: "800+",
  },
  {
    title: "Career Development",
    description: "Job fairs, internship programs, and professional networking events",
    image: "/career-fair-networking.png",
    schedule: "Bi-monthly",
    participants: "4000+",
  },
]

export default function CampusActivities() {
  return (
    <section className="py-16 bg-mist/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Campus Activities</h2>
          <p className="text-mist text-lg max-w-3xl mx-auto">
            Engage in diverse activities that enhance your university experience and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-navy text-ivory px-3 py-1 rounded-full text-xs font-semibold">
                  {activity.schedule}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-navy mb-3 text-lg group-hover:text-navy/80 transition-colors">
                  {activity.title}
                </h3>
                <p className="text-mist mb-4 text-sm leading-relaxed">{activity.description}</p>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-mist">Participants: </span>
                    <span className="font-semibold text-navy">{activity.participants}</span>
                  </div>
                  <button className="text-navy font-semibold text-sm hover:text-navy/80 transition-colors">
                    Join Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
