## AI-powered and Cognition-enabled Robotics (AICOR) 

In this book, we delve into the challenge of designing and implementing
computer programs capable of controlling general-purpose robots. Our
focus is on enabling these robots to autonomously execute a wide range
of everyday manipulation tasks, ensuring they can be dynamically and
intuitively tasked to perform such activities.

The control programs we envisage are to interpret naturally expressed
task requests, like "bring me something to drink" or "clean up," and
proficiently carry out these tasks.

<figure id="fig:body-motion-problem">
<img src="Ch01/02-body-motion-problem.png" />
<figcaption>Body motion problem.</figcaption>
</figure>

In order to do so, the control programs have to solve the **body motion
problem**, which is illustrated in
Figure [1.3](#fig:body-motion-problem) and defined below:

::: theo

Given:

:   a naturally formulated task request

infer and execute:

:   a motion of the robot body that

    -   achieves the desired effects and

    -   avoid unwanted side effects.
:::

Inferring the precise body movements required to fulfill an
underdetermined task request represents an enormous computational
challenge. This task goes beyond mere execution; it involves
interpreting what somebody else wants one to do. It requires to
understand how the physical world works and predicting the consequences
of actions to choose action variations that will succeed. It also calls
for comprehensive knowledge, commonsense, and intuitive physics
reasoning. Necessary reasoning methods include informed decision making,
learning from experience, prospection, action emulation, failure
monitoring, diagnosis, and recovery, and planning intended courses of
action based on predicted consequences of actions.

This task and how to solve it is studied and investigated in the field
of AI-powered and cognition-enabled robotics (AICOR). AICOR represent a
cutting-edge field where robotics are not only automated through
artificial intelligence but also endowed with cognitive abilities
resembling human-like understanding and decision-making. This
integration aims to create robots that can interact more naturally with
their environment and with humans.

::: theo
The interdisciplinary research field dedicated to the creation and
advancement of such proficient robot control systems is termed
"AI-powered and Cognition-enabled Robotics (AICOR)." This field
synergizes cutting-edge and well-established methodologies from
artificial intelligence and robotics, integrating them with principles
and insights derived from models of human cognition.
:::

::: theo
The objective of AICOR is to understand the design and the operation of
robot control systems that can competently solve the body motion problem
for natural and dynamically changing task requests, understand what they
are doing and how as well as the consequences of their actions and
translate this understanding into successful and trustworthy action.
:::

AICOR robots hold immense promise in significantly enhancing the lives
of many individuals, particularly those facing physical and cognitive
challenges. Some of these individuals are confined to their beds, unable
to lead independent lives, often reliant on others for assistance, and
at times feeling like a burden. AICOR robots have the potential to
bridge the gap between their needs and aims and their physical
capabilities. By employing autonomous robots as assistive tools, these
individuals could obtain what they need, precisely when they need it,
autonomously, thus eliminating the need to seek help constantly. In this
way, robots could markedly improve their quality of life, offering a
higher level of independence and dignity.

AICOR robots capable of interpreting naturally stated tasks and
translating them into successful action are applicable across a broad
spectrum of domains. By assuming roles in perilous situations, such as
rescue operations, these robots can be expected to minimize risks for
humans. Furthermore, their integration is anticipated to yield
substantial economic impact helping to sustain the workforce that is
needed to secure our wellbeing. By relieving human workers from
hazardous aspects of their jobs, these robots not only safeguard health
but also augment productivity and quality of life.

Exploring the computational models underpinning AICOR robots not only
advances our competence in designing and realizing robots but also
propels progress in arguably the most profound scientific endeavor:
unraveling the mysteries of the brain and mind, and deciphering the
mechanisms that empower intelligent behavior.