# Introduction 

Robots have become an indispensable part of our modern world,
contributing significantly to various industries and aspects of daily
life. Figure [1.1](#fig:robot-applications) shows several examples of different
robots accomplishing disparate tasks in diverse environments. Assembly
and production robots are deployed in manufacturing and assembly lines
making production processes more efficient and robust. Transportation
robots work in warehouses for material handling and logistics. They
navigate through warehouse environments, transporting goods and
optimizing inventory management. Robotic vacuum cleaners have become
common household appliances. They autonomously navigate living spaces,
using sensors to detect obstacles and efficiently clean floors. Drones
are a form of flying robots, which are used for tasks like aerial
photography, surveillance, and delivery in various industries.
Self-driving cars use a combination of sensors, cameras, and AI
algorithms to navigate roads, make decisions, and potentially
revolutionize the transportation industry. Inspection robots equipped
with cameras and sensors are employed for inspecting and maintaining
infrastructure, such as pipelines, bridges, and power lines, in
challenging or hazardous environments. Agricultural robots are
increasingly used for tasks like planting, harvesting, and monitoring
crops. They aim to improve efficiency and reduce the need for manual
labor.

<figure id="fig:robot-applications">
<table>
<thead>
<tr class="header">
<th style="text-align: center;"><img
src="img/01/DALLE/factory-robot.png" style="width:45.0%"
alt="image" /></th>
<th style="text-align: center;"><img src="img/01/DALLE/vaccum-robot.png"
style="width:45.0%" alt="image" /></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td style="text-align: center;"><img src="img/01/DALLE/drohne1.png"
style="width:45.0%" alt="image" /></td>
<td style="text-align: center;"><img
src="img/01/DALLE/warehouse_bot.png" style="width:45.0%"
alt="image" /></td>
</tr>
</tbody>
</table>
<figcaption>The figure shows four different robots accomplishing four
different tasks in four different environments.</figcaption>
</figure>

The practicality and success of these varied and impressive robotic
applications is a result of the ingenuity, competence, and foresight of
robot engineers. These experts meticulously define tasks and engineer
the operational environments to preclude the necessity of executing
open, unconstrained tasks in uncontrolled settings. By minimizing the
complexities and unpredictability inherent to these tasks and
environments, they successfully circumvent a vast amount and possibly
open-ended number of individual challenges. This proactive approach
obviates the need for overly intricate control programs, ensuring that
the robots perform efficiently and effectively within their designated
parameters.

One way to reduce complexity is to realize robot applications through
single-purpose robots. Single-purpose robots are specifically designed
for the respective tasks to excel in a particular function, enhancing
their efficiency and reliability within a defined scope. Consider, for
example, robotic vacuum cleaners or self-driving vehicles. Robotic
vacuum cleaners are equipped with coverage algorithms. These algorithms
enable the robot to systematically cover all reachable areas during
cleaning, ensuring comprehensive coverage without redundancy. Autonomous
vehicles are programmed for place-to-place navigation tasks. They use
advanced navigation algorithms and sensor systems to move from one
location to another without colliding with obstacles or other entities.
This careful planning minimizes the risk of accidents.

If the tasks themselves cannot be sufficiently simplified, robot
engineers sometimes try to further reduce complexity by structuring the
environment. Structuring the working environment is crucial for
supporting successful robot actions. This involves creating a controlled
and optimized setting where robots can operate efficiently. Fixtures and
mountings in an automobile factory, for instance, ensure that objects
are positioned optimally for the robots to perform their tasks. In an
automobile factory, robots are programmed to execute very fast and
accurate motions with high reliability and repeatability. This precision
is essential in manufacturing processes to maintain product quality and
production speed.

<figure id="fig:grasping-a-pot">
<img src="Ch01/01-holding-pot.png" />
<figcaption>Modern mobile manipulation robot making
popcorn.</figcaption>
</figure>

Besides specialized, single-purpose robots, the realm of robotics is
expanding to include general-purpose robots, such as the one illustrated
in Figure [1.2](#fig:grasping-a-pot), which are becoming increasingly
prevalent. These versatile robots typically feature designs inspired by
the human form, providing arms and grippers for manipulation, and heads
equipped with cameras that can be pointed into various directions. With
their advanced motion and physical manipulation abilities, these robots
are adept at performing a wide array of manipulation tasks. From setting
and clearing the table to heating meals in the microwave, preparing
popcorn, replenishing the coffee machine, and brewing coffee, their
capabilities extend to a myriad of daily activities.

With the sensing and motion capabilities of these general purpose robots
it is possible to accomplish a dynamically changing and expanding set of
human-scale everyday manipulation activities in open human living
environments -- if their control programs manage the complexity of the
necessary information processing tasks.
