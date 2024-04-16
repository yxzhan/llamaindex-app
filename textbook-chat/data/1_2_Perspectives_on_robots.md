## Perspectives on robots 

This section presents three key perspectives on robots:

1.  The first perspective characterizes robots as software-controlled
    articulated electro-mechanical devices that accomplish their tasks
    by moving their body.

2.  The second perspective is targeted at robots that are dynamically
    tasked with a variety of complex tasks that are to be accomplished
    in an open environment. In this case robots are best viewed as
    agents that have beliefs and goals and autonomously decide on the
    corse of action in order to achieve the robustness and flexibility
    for successful task completion

3.  The third perspective considers the case in which the decision
    making has to be well informed in order to make the right choices.
    For example, in a chemical application the robot has to reason about
    possible chemical reactions before pouring one substance into
    another one. In this case it is helpful to think of the robot as an
    information processing or cognitive system.

### Robots as software-controlled mechanical devices 

Let us start with a definition of what we consider robots to be:

::: theo
A Robot is an articulated electro-mechanical device that is operated and
controlled by computer programs in order to accomplish tasks.
:::

Robots have a physical body, which is an assembly of body parts
including grippers, heads, a base, upper body, lower arms, and other
components. The body parts are connected by joints, which are actuated
by motors. The control program orchestrates the operation of these
motors, enabling the robot to perform complex, coordinated movements:
navigating by turning the base's wheels, aligning the head towards
specific directions, or manipulating the arms and grippers to interact
with objects. This intricate coordination allows the robot to change its
posture and exert forces on its environment, thereby accomplishing tasks
or, in some cases, leading to unintended side effects. The crux of the
challenge for the robot's control program lies in interpreting a task
request and devising a sequence of movements that ensures the
achievement of the intended outcomes while at the same time mitigating
any adverse effects.

<figure id="img:definition robot">
<img src="Ch01/03-definition-robot.png" />
<figcaption>A robot agent accomplishing task requests by moving its
articulated body as dictated by the robot control program by causing
physical changes in the environment.</figcaption>
</figure>

Figure [1.5](#img:pr2_robot-with-components) illustrates the structure of
a state-of-the-art general-purpose mobile manipulation robot,
highlighting several of its critical components in greater detail. The
diagram focusses on components that endow the robot with its principal
manipulation and perception capabilities. For manipulation, the robot's
kinematic chain, which includes the shoulder, elbow, and hand joints, is
pivotal. This chain facilitates the precise movement of the robot's end
effector, the gripper, allowing it to attain specific poses and follows
selected trajectories. The navigation base, equipped with steerable
wheels, provides the robot mobility, enabling it to traverse and
position itself within its operational surroundings. For perception,
crucial sensors are integrated into the robot's design. Laser sensors
measure distances to obstacles in their path, providing spatial
awareness, while cameras capture visual data from the environment. This
visual input allows the robot to process and interpret task-relevant
information, playing a crucial role in its interaction with the
surrounding world.

<figure id="img:pr2_robot-with-components">
<img src="Ch01/04-robot-body.png" />
<figcaption>The mobile manipulation robot: a PR2 robot produced by
Willow Garage.</figcaption>
</figure>

Often, the directives and information contained in a task request are
not sufficient to specify an appropriate sequence of detailed robot
movements. Consequently, the robot must perceive and interpret the
task's context to bridge these information gaps. To do so, the robot
relies on its sensors. These sensors are designed for measuring various
physical parameters related to both the robot's own structure and its
external environment. For instance, force sensors enable the robot to
measure the amount of pressure it exerts on objects, while encoders
measure the extent of joint movement, even detecting if a motion is
hindered or stalled. Additionally, other sensors are attuned to
environmental attributes: contact sensors identify collisions between
the robot and its surroundings, distance sensors ascertain the proximity
of nearby objects, and cameras capture visual snapshots of the robot's
environment. The data acuired by these sensors provide the control
program with raw information about the robot's status and its
operational context, information that is indispensable for the
successful execution of tasks.

### Robots as agents 

As previously discussed, robot control systems are to solve the body
motion problem. This challenge escalates when dealing with
general-purpose robots, where task requirements are dynamic, open-ended,
and potentially multifaceted. General-purpose robots may be called upon
to execute a variety of tasks, each with its own complexity and
structure. These tasks are often abstractly defined, lacking sufficient
detail, thereby necessitating the acquisition of additional information
during task execution to determine suitable body motions. Moreover,
these robots must possess robust failure detection mechanisms and
recovery protocols. These factors contribute to the complexity inherent
in designing and operating general-purpose robotic systems.

For example, imagine a meal preparation robot that is able to cut slices
of bread. Since this is a very specific task, a general-purpose robot
should also be able to slice a cucumber, or quarter a peach. For this,
the robot needs to know how cutting, slicing and quartering relate to
each other, and most importantly, how the task request can be translated
to appropiate body motions that achieve the desired result.

During task execution, a robot must continuously infer the most
appropriate body motion, considering its current knowledge of the task,
learnings from ongoing actions, and assumptions about the environment.
This requires bridging the gap between the limited information provided
by the task request and the detailed, context-specific information
necessary for precise manipulation in varying environments. As depicted
in Figure [1.6](#fig:need-for-reasoning), this gap is bridged by the robot's
knowledge, and its perception and reasoning capabilities.

<figure id="fig:need-for-reasoning">
<div class="center">
<div class="large">
<table>
<tbody>
<tr class="odd">
<td style="text-align: left;"></td>
<td style="text-align: right;"><strong>context-specific body
motion</strong></td>
</tr>
<tr class="even">
<td style="text-align: left;">-</td>
<td style="text-align: right;"><strong>vague task request</strong></td>
</tr>
<tr class="odd">
<td style="text-align: left;"><span class="math inline"> </span></td>
<td style="text-align: right;"><span class="math inline"> </span></td>
</tr>
<tr class="even">
<td style="text-align: left;">=</td>
<td style="text-align: right;"><strong>perception &amp; knowledge &amp;
reasoning of the robot</strong></td>
</tr>
</tbody>
</table>
</div>
</div>
<figcaption>The gap between the information needed to generate the
context-specific motions for table setting and the information contained
in the task request has to be filled through the knowledge and the
reasoning capabilities of the robot agent.</figcaption>
</figure>

Given the unpredictability of tasks and environmental conditions, it is
impractical for robot engineers to anticipate all potential reasoning
tasks and actions during the design phase. Instead, robot control
systems must be imbued with the ability to autonomously make decisions,
showcasing adaptability, dependability, and efficiency in diverse and
uncertain scenarios and contexts.

To promote autonomous decision-making, we conceptualize control programs
as robot agents capable of independently executing human-scale tasks, as
illustrated in Figure [1.7](#fig:top-level-agent). Viewing robots as agents involves
modeling them as entities with cognitive capabilities, where behavior is
guided by desires, beliefs, and intentions. These agents strive to
fulfill task requests robustly and efficiently, aligning with the
preferences of the individuals they serve. They formulate and maintain
beliefs about task-relevant contexts to make informed decisions and
intend to act rationally, optimizing their performance based on
predefined metrics.

<figure id="fig:top-level-agent">
<img src="Ch01/10-robot-agent-model.png" />
<figcaption>Top-level model of robot agents</figcaption>
</figure>

In this conceptual framework[^1] robot agents are robots that act in an
environment in order to change the state of the environment to achieve
goals as dictated by the task requests. The framework enables us to
describe the interaction of robots and the environment they act in, how
goals and tasks of the robots can be stated and the goal achievement
through robot actions be measured, and how robots should select their
course of action in order to maximize the impact of its actions.

In the rational robot framework a *robot agent* is conceptualized as an
entity that acts in an *environment* in order to achieve its goals. The
agent perceives the environment through its *sensors* and changes the
state of the environment through its physical actions. The agent is
controlled through a function that maps percepts from its sensors and
prior knowledge into an action that the robot executes. We further
conceptualize the processes with which robots decide on their course of
action and how the actions change the environment as an iterative
interaction between the robot and the environment it is operating in. In
each iteration the robot agent

1.  perceives the state of the environment,

2.  decides on the next action, and

3.  executes the action in order to change its environment.

The repeated execution of the steps (1.) to (3.) forms a so-called
*perception-action loop*.

### Robots as information processing entities 

To better understand cognitive requirements for robot control as agents,
it is insightful to draw from human cognitive capabilities. The human
brain demonstrates exceptional skill in managing tasks with versatility,
resilience, and creativity, especially evident in remote robot
operation.

Imagine a scenario: a person connects a game controller to a robot and
uses virtual reality glasses for immersion in the robot's environment
(refer to Figure [1.8](#img:pr2_controller)). The person becomes the puppeteer of
the robot's movements, adeptly guiding it through various tasks from
household chores to intricate manual tasks. This scenario not only
showcases the potential of human-guided robotics but also highlights a
key insight: successful world interaction is essentially about
processing information.

<figure id="img:pr2_controller">
<img src="Ch01/07-game-controller.png" style="width:100.0%" />
<figcaption>Remote control of a mobile manipulation robot with a game
controller.</figcaption>
</figure>

Through the game controller and virtual reality glasses, the person
processes visual information from the robot's cameras, makes decisions,
and translates these into commands, resulting in the robot's physical
actions. This demonstrates the embodiment of human cognitive reasoning
in a robot: humans leverage their cognitive skills to process
information and make decisions, while the robot's actuators implement
these decisions in the physical world. This interaction exemplifies the
general, robust, flexible, and competent control humans have over
robots, achieving tasks with remarkable adaptability and problem-solving
capabilities evidenced through:

-   Generality and Flexibility: Humans can seamlessly adapt their
    control strategies to work with different robots, handling various
    objects and tools. This adaptability extends to performing tasks in
    different environments, showcasing a remarkable generalization of
    skills.

-   Competence Across Contexts: Humans can accomplish tasks in a range
    of contexts, including situations where additional considerations,
    such as the presence of a small child, come into play. This
    highlights the robustness and contextual awareness inherent in human
    control over robots.

-   Handling Novelty: Humans can proficiently tackle variations of tasks
    with novel objects and in unknown environments. This ability to
    adapt to unforeseen circumstances underscores the flexibility and
    problem-solving acumen of human operators.

-   Learning from Various Sources: Humans can learn to accomplish novel
    tasks through diverse sources, such as reading instructions,
    watching instruction videos, or interacting with a teacher. This
    learning process involves understanding the task, its nuances, and
    potential risks.

-   Understanding and Communication: Humans possess a deep understanding
    of their actions, evident through their ability to answer questions
    about what they are doing, why they are doing it, and how. They can
    anticipate the consequences and risks of their intended actions and
    consider alternative courses of action.

-   Dynamic Collaboration: Humans can dynamically adapt their task
    interpretation and preferences when jointly accomplishing a task
    with another human. This collaborative aspect involves a shared
    understanding and synchronized effort toward task completion.

In essence, the remarkable capabilities demonstrated by humans in
controlling robots highlight the synergy between information processing,
or better cognition, and physical action.

<figure id="img:control_system_model">
<img src="Ch01/08-robot-control-system.png" style="width:92.0%" />
<figcaption>Control system model</figcaption>
</figure>

**In this book we investigate the question of whether we can replace the
human in our setting with a computer program that can perform these
information processing tasks autonomously, see
Figure [1.9](#img:control_system_model).**