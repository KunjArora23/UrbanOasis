export const DashboardStats = ({ stats }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className={`${stat.color} rounded-lg p-4 flex items-center shadow-sm`}>
          <div className="text-2xl mr-4">{stat.icon}</div>
          <div>
            <p className="text-sm font-medium">{stat.title}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );