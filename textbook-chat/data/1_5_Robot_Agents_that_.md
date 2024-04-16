## Robot Agents that ... 

In this section we explore how robot agents accomplish different kinds
of everyday activities that actually require a little amount of body
movements (often pick, carry, place motions), but in large variations
that require semantic domain knowledge.

For each of the following exemplary tasks and the environments they are
executed in, different domain knowledge needs to be accessed.

### [... accomplish everyday transportation tasks](https://vib.ai.uni-bremen.de/page/labs/domestic-object-transportation-laboratory/) 

The research laboratory presents a robot agent that executes tasks
including setting the table, cleaning up after eating, and loading and
unloading the dishwasher. The collection of experiments show how general
a robot control system can be programmed if it employs knowledge and
reasoning.

<figure id="fig:household-challenge">
<img src="Ch01/12-ease-robot-housework-challenge.png" />
<figcaption>The household challenge: for a robot lifetime of robot days
perform for each meal at each day set the table, clean the table, load
the dishwasher, and unload it afterwards.</figcaption>
</figure>

The control program of the robot operates based on a fundamental
principle: \"put things where they belong.\" This principle breaks down
into a series of sophisticated pick and place actions. For instance,
when setting the table for breakfast, the robot:

-   Opens the drawer to fetch clean tableware.

-   Picks up a cereal box, a cup, and a milk bottle from their
    respective storage spots.

-   Arranges the items neatly on the table, ensuring the setup is
    appropriate for the meal.

After the meal, the robot:

-   Clears the table, carefully handling the fragile tableware.

-   Loads the dishwasher with the used items, optimizing space for
    efficiency.

-   Cleans the table surface, preparing it for the next use.

<figure id="fig:pick-up-variations">
<img src="Ch01/13-table-setting.png" />
<figcaption>The robot agent performing a variation of pick up actions as
part of the household challenge: (1) opening a drawer, (2) picking
cereal, (3) placing cup and milk, (4) carrying a tray, (5) picking a
bowl, (6) placing milk.</figcaption>
</figure>

The robot is equipped with an extensive knowledge base, storing detailed
information about various household routines and preferences. It
understands that table settings differ between breakfast, lunch, and
dinner and adjusts its actions accordingly. The robot's adaptability is
highlighted by its ability to recognize and handle tableware,
acknowledging its fragility and the possibility of stacking items
efficiently.

For instance, in a specific kitchen setup, the robot identifies the
storage locations of tableware, even if they vary from one kitchen to
another. However, if placed in a new environment where the storage
locations are unknown, such as a different kitchen or a storage room,
the robot may require updates to its knowledge base to continue
performing efficiently.

With its sophisticated task execution, adaptability, and extensive
knowledge base, this robot represents a significant leap forward in
household automation. However, achieving such a level of functionality
and intelligence in a robot involves overcoming substantial challenges,
particularly in developing a rich knowledge base and ensuring the
robot's adaptability to diverse household environments.

### [... work in a retail store](https://vib.ai.uni-bremen.de/page/labs/dynamic-retail-robotics-laboratory/) 

In the domain of retail, robotics is beginning to revolutionize the
shopping experience, mirroring the advancements in household robotics.
The primary operations of these robots remain pick and place actions,
but the overarching goal shifts to \"looking for and ordering things.\"
While single-task robots have made their presence felt in storage rooms
of large logistics firms, multifunctional robots are gradually making
their way to the shop floor, exemplified by shelf scanning robots used
for stocktaking (as visualized in
Figure [1.15](#fig:store-mapping)).

<figure id="fig:store-mapping">
<img src="Ch01/14-retail-robots.png" />
<figcaption>Robot agent building a model of a retail store. Left: Robot
identifying objects in the store with its camera. Right, top: Perception
results of the robot. Right, bottom: Object recognition of the
perception system.</figcaption>
</figure>

The stocktaking robot is designed to:

-   Recognize individual shelves and their respective levels.

-   Detect and read the price tags of products on each shelf level.

-   Count the number of products placed consecutively. Compile and
    update all the gathered information into a database.

This robot autonomously builds a model of its environment to navigate
and perform tasks effectively. However, its capabilities are tailored to
the structured environment of retail stores, which are characterized by
standardized layouts with shelves, shelf levels, and products. The
identification of products is facilitated by barcodes, and the
positioning of products facing the customers simplifies perception and
interaction.

Despite the structured nature of retail environments, shopping or
service robots face numerous challenges, especially in real-time,
customer-centric settings:

-   Customer Traffic: Navigating through and operating in crowded
    spaces.

-   Customer Preferences: Understanding and adapting to individual
    customer needs and behaviors.

-   Fast Changing Products: Keeping up with the frequent changes in
    product placements and new stock.

-   Misplaced Products: Identifying and dealing with products that are
    not in their designated spots.

-   Narrow Spaces: Manipulating and picking products in tightly packed
    shelves.

To address these challenges, shopping robots must link the perceived
information (like barcodes) to customer demands. For instance, if a
customer is looking for the cheapest toothpaste, the robot must identify
which barcodes correspond to different toothpaste brands and determine
the most cost-effective option. This requires integrating extensive
product knowledge, potentially sourced from web stores and online
product databases. Such integration enables these robots to assist
customers effectively by helping them locate and identify products based
on specific criteria.

Shopping assistant robots represent a significant step towards
automating and enhancing the retail experience. By combining
sophisticated perception abilities, comprehensive product knowledge, and
customer interaction capabilities, these robots have the potential to
transform the shopping landscape. However, the transition from
structured, predictable environments like storage rooms to dynamic,
customer-driven shop floors introduces a set of challenges that
necessitate advanced solutions in robot design, environmental
understanding, and customer service automation.

### [... prepare simple meals](???) 

Another robot you can find in the AICOR ViB is the popcorn making robot.
For a visual introduction of the task, consider the snapshots of the
cooking activity depicted in
Figure [1.16](#fig:making-popcorn). Additionally, a comprehensive
demonstration of the robot performing the complete popcorn preparation
task can be viewed at the provided YouTube link
<https://www.youtube.com/watch?v=cTCJSNjTdo0>.

<figure id="fig:making-popcorn">
<img src="Ch01/09-popcorn-making.png" />
<figcaption>Action steps for popcorn making: (1) putting the cooking pot
on the stove, (2) opening the drawer, (3) pouring the corn into the pot,
(4) switching on the drawer, (5) grasping the lid, (6) putting the lid
on the pot, (7) distributing the corn evenly in pot, (8) pouring the
popcorn onto the plate, (9) salting the popcorn.</figcaption>
</figure>

The AICOR ViB's popcorn-making robot represents a pinnacle of robotics,
turning a simple instruction like \"make popcorn\" into a showcase of
advanced robotics and AI capabilities. This task, while straightforward
in appearance, encompasses a wealth of complex, underlying processes
that epitomize the intricacies of robotics in practical applications.

**Analysis of Task Complexity**

-   Decomposition of the High-Level Instruction: The robot must dissect
    the command into actionable steps. It involves understanding the
    sequence of operations, such as acquiring popcorn kernels, measuring
    them, and setting up the cooking appliance.

-   Importance of Ordering and Timing of Actions: Ensuring the correct
    order and timing of actions is vital. The robot must comprehend the
    sequence that leads to successful task completion, like not turning
    on the microwave prematurely.

-   Necessity of Sensorimotor Coordination: Accurate sensorimotor
    coordination is essential. The robot navigates the kitchen, handles
    objects (like a popcorn packet), and monitors the cooking, adapting
    to the specific environment and tools.

**Understanding and Interaction with the Environment**

-   Environmental Understanding and Self-Awareness: The robot requires
    comprehensive knowledge of the kitchen environment, including the
    locations of items and how to operate appliances.

-   Procedural Knowledge and Action Sequence Dependencies: Understanding
    the sequence of actions and their dependencies is crucial, like
    knowing to place the pot on the stove before heating it.

-   Sensory Feedback and Monitoring: The robot must monitor the process
    through sensory feedback, like recognizing the sound of popcorn
    popping.

**Advanced System Integration**

-   Environmental Mapping for Object Recognition: The robot uses
    sophisticated mapping to recognize objects.

-   Task Planning Algorithms: Algorithms are used to deduce and order
    the steps from a high-level instruction.

-   Control Systems for Precise Object Interaction: Precise interaction
    with objects is achieved through advanced control systems.

-   Sensory Processing and Learning Mechanisms: The robot adapts to new
    environments or changes through advanced sensory processing and
    learning mechanisms.

**Physical and Interactional Considerations**

-   Handling of Different Objects: The robot considers the physical
    characteristics like weight, shape, and temperature of objects for
    interaction.

-   Task-Specific Knowledge: Knowledge of specific tasks, like where
    popcorn is stored or how to operate a salt grinder, is crucial.

**Example Task: Popcorn Making** The process involves several steps,
each requiring context-dependent execution:

1.  Picking and placing an empty pot on the hotplate.

2.  Turning on the hot plate.

3.  Handling the corn bowl and adding corn to the pot.

4.  Placing the lid on the pot.

5.  Shaking the pot to prevent burning.

6.  Monitoring until the popcorn is ready.

7.  Turning off the hot plate.

8.  Transferring the popcorn to a bowl and placing the pot in a safe
    area.

### [... assist in laboratories](???) 

In the realm of scientific research and testing, robots are increasingly
being introduced to assist with intricate assembly tasks, such as
compiling chemical test kits (as shown in
Figure [1.17](#fig:medical_lab)). These tasks demand a nuanced
understanding of physics and material properties, far beyond the
requirements of typical household or retail assistance robots.
Laboratory assembly robots must manipulate delicate and often minuscule
components, necessitating a sophisticated blend of compositional
knowledge, material awareness, and functional understanding.

<figure id="fig:medical_lab">
<img src="Ch01/15-medical_lab.png" />
<figcaption>Robot agent assembling sterility test kits in a medical
laboratory. The transparent arm simulates the planned body movement of
the robot in order to calculate success.</figcaption>
</figure>

To manage the intricate assembly tasks typically found in a laboratory,
a robot must possess:

-   Compositional Knowledge: Understanding the assembly process, akin to
    how humans interpret instruction sheets.

-   Material Knowledge: Recognizing the properties of various materials,
    such as the fragility of glass or the malleability of rubber, and
    adapting manipulation strategies accordingly.

-   Functional Understanding: Identifying the purpose and proper
    application of each component within the assembly, ensuring that
    each part is used correctly, like placing a rubber plug on the top
    of a glass tube, not at the bottom or side.

Laboratory environments offer certain advantages that facilitate the
successful deployment of robots:

-   Structured Environments: Labs are meticulously organized, with each
    tool and component having a specific place and purpose.

-   Minimal Human Traffic: Unlike retail or household settings, labs
    typically have fewer people moving around, reducing the complexity
    of navigation and operation.

-   Limited Object Variability: The number of different objects and
    materials a robot must recognize and handle is relatively small,
    allowing for more focused and specialized knowledge bases.

-   Detailed Action Sets: The tasks are well-defined with specific steps
    and sequences, enabling robots to follow precise instructions
    without requiring significant on-the-fly decision-making.

-   Consistency in Tasks: There's minimal variation in the tasks
    performed, allowing robots to perfect specific routines without
    needing to adapt to new or unexpected scenarios frequently.

Laboratory assembly assistant robots exemplify the integration of
advanced robotics in high-precision, high-stakes environments. These
robots, equipped with detailed knowledge of materials, physics, and
functional applications, are capable of handling delicate and complex
tasks with precision and consistency. The structured nature of
laboratory environments further contributes to their success, providing
a controlled setting that maximizes the robots' efficiency and accuracy.
While these robots currently operate within a relatively narrow scope of
tasks, their potential to revolutionize laboratory work by enhancing
precision, reducing manual errors, and increasing efficiency is
profound.

### [... are ocean scientists](???) 

Transitioning from the structured confines of human-made environments to
the vast and unpredictable realm of nature, underwater robots designed
for scientific research represent a pinnacle in robotics engineering.
These robots are deployed in dynamic and often harsh natural
environments to observe and analyze ecosystems over extended periods.
Their tasks and operational challenges are fundamentally different from
those encountered in controlled settings, demanding a unique set of
capabilities and design considerations.

<figure id="fig:underwater_env">
<img src="Ch01/16-remaro-robot.png" />
<figcaption>Underwater env 1</figcaption>
</figure>

Underwater research robots must be equipped to handle the complexities
of natural settings, which include:

-   Advanced Sensory Capabilities: Possessing sensors that can navigate
    and gather data in conditions with low light and high reflection,
    typical of underwater environments.

-   Autonomous Functioning: Operating independently for prolonged
    periods without the need for external control, often in areas where
    human intervention is not feasible.

-   Self-Repair Mechanisms: Having the ability to perform diagnostics
    and basic repairs autonomously to ensure continued operation and
    return to the surface if necessary.

-   Accurate Position Estimation: Maintaining precise navigation and
    positional awareness even in adverse conditions, where conventional
    systems like GPS are not operable.

-   Adaptive Behavior Modeling: Understanding and predicting the
    behavior of living organisms in their natural habitat, accounting
    for both short-term actions and long-term patterns like breeding
    seasons or coral growth.

Building robots capable of conducting research in natural underwater
environments poses significant challenges:

-   Environmental Robustness: Designing systems that can withstand
    pressure, temperature, and salinity variations, along with physical
    obstacles and unpredictable elements.

-   Energy Efficiency: Ensuring the robot can manage its energy
    resources efficiently, especially crucial when operating
    autonomously over extended periods.

-   Data Processing and Transmission: Handling the collection,
    processing, and, where possible, transmission of vast amounts of
    data, often with limited bandwidth or in delayed transmission
    scenarios.

-   Interaction with Living Organisms: Developing non-intrusive methods
    to observe and interact with marine life, ensuring that the robot's
    presence does not adversely affect the natural behavior and balance
    of the ecosystem.

Underwater research robots in natural environments represent an advanced
frontier in robotics, where the machines are not just tools but also
explorers and observers of the unknown. These robots hold the promise of
unlocking mysteries of the underwater world, providing insights into
complex ecological patterns and the effects of environmental changes.
The design and operational challenges they face push the boundaries of
current technology, driving innovation in robotics, materials science,
and environmental science.

### [... learn to prepare meals](https://vib.ai.uni-bremen.de/page/labs/actionable-knowledge-graph-laboratory/) 

Elevating the capabilities of household robots and robots that prepare
simple meals, the cooking assistant robot represents a significant leap
in domestic robotics. Unlike the relatively structured tasks of setting
and cleaning the table, cooking introduces open-ended task categories
with a high degree of variability and complexity. This robot is to
prepare meals, handling a wide range of ingredients, kitchen tools, and
cooking techniques.

<figure id="fig:learning-from-videos">
<img src="Ch01/17-robohow-cooking.png" />
<figcaption>Robot agent learning to prepare meals by watching
instruction videos.</figcaption>
</figure>

The cooking robot is required to perform sophisticated cooking actions,
such as:

-   Cutting and Peeling: Precisely handling a variety of textures and
    shapes of fruits, vegetables, and other ingredients.

-   Mixing and Stirring: Understanding the required consistency and
    applying the appropriate technique for different dishes.

-   Differentiating Pouring Techniques: Recognizing when to pour
    ingredients into a container versus pouring through a strainer or
    sieve.

-   Manipulating Complex Objects: Opening jars, milk cartons, cereal
    packs, and other packaged food items with varying levels of
    difficulty.

Cooking involves not only the mechanical execution of tasks but also a
deep understanding of the process and sequence of actions. Instructions
that are intuitive to humans often lack the explicit detail required for
robotic comprehension. For example:

-   Understanding Implicit Instructions: Instructions like \"Add the
    milk to the dough, mix it, and pour it into a pan\" are inherently
    understood by humans but require explicit contextual understanding
    and sequencing for a robot.

-   Differentiate between Task Requests: A general-purpose robot needs
    to be able to relate instructions like cutting, slicing and
    quartering and differentiate them in the ways they influence body
    motions.

-   Learning from Demonstrations: An effective approach for teaching
    cooking to robots involves learning from demonstrations, where
    robots observe and interpret human actions. This method allows
    robots to perceive executed actions and understand the nuances of
    task variations by comparing different demonstrations (as
    illustrated in
    Figure [1.19](#fig:learning-from-videos)).

For a cooking robot to operate effectively, it must:

-   Adapt to Different Kitchen Environments: Recognize and adapt to the
    varying layouts, storage solutions, and equipment found in different
    kitchens.

-   Understand Recipe Variations: Interpret a wide array of recipes,
    accounting for the inevitable variability and occasional ambiguity
    in cooking instructions.

-   Learn from Human Behavior: By analyzing demonstrations, the robot
    can accumulate knowledge about cooking techniques, ingredient
    handling, and the sequence of steps involved in preparing various
    dishes.

The cooking assistant robot is a groundbreaking advancement in household
robotics, expanding the possibilities of robotic assistance in daily
life. However, the complexities of cooking tasks, combined with the need
for nuanced understanding and adaptability, present formidable
challenges. Overcoming these hurdles requires innovative approaches to
robot learning, sensory perception, and action execution, paving the way
for a future where robots not only assist in household chores but also
take on the role of culinary experts in our kitchens.

### [... accomplish tasks together with humans](???) 

Developing autonomous robots that collaborate effectively with humans in
household tasks represents one of the most intricate challenges in the
field of robotics. These robots are not just expected to execute tasks
but also to understand, adapt, and seamlessly integrate into human
routines and preferences. The ability to establish a shared
understanding and coordinate actions with human partners is crucial,
especially in dynamic and unpredictable home environments.

<figure id="fig:working-with-humans">
<img src="Ch01/18-joint-action.png" />
<figcaption>Robot agent preparing a meal together with a human. Here it
is important to not only plan its own tasks but also coordinate with
other agents like the human.</figcaption>
</figure>

For successful collaboration, a robot must be equipped with a deep
understanding of several nuanced human-centric concepts:

-   Prioritization of Tasks (Importance): The robot must discern the
    priority of tasks, such as understanding that removing boiling water
    from a stove is more critical than setting the table at that
    particular moment.

-   Understanding Human Preferences (Cooperation): The robot should
    recognize and respect human preferences, like acknowledging if a
    human prefers to prepare the salad themselves while the robot sets
    the table.

-   Effective Communication: Ensuring clear and effective communication
    channels, so the robot can understand instructions from humans and,
    conversely, convey its intentions or needs clearly.

-   Navigating Shared Spaces (Deference): The robot must be adept at
    sharing space with humans, avoiding obstructing pathways, and being
    able to pause or reroute its actions when in close proximity to
    humans.

In a collaborative setting, especially in tasks involving potential
hazards like cooking, the robot's ability to ensure safety is paramount:

-   Environmental Awareness: The robot should be constantly aware of its
    surroundings, able to detect the presence of humans and other
    obstacles to avoid collisions or unsafe interactions.

-   Emergency Protocols: Implementing emergency stop mechanisms and
    other safety protocols to immediately halt operations if a potential
    risk is detected.

-   Proactive Hazard Prevention: Understanding and anticipating
    potential dangers, such as the risk of spilling boiling water, and
    taking preemptive actions to prevent accidents.

Developing robots capable of such sophisticated human collaboration
involves several key technical considerations:

-   Advanced Sensory Systems: Equipping robots with sensors that can
    detect and interpret human presence, gestures, and spoken commands
    with high accuracy.

-   Contextual Understanding and Adaptation: Enabling robots to
    understand the context of tasks and adapt their actions based on the
    dynamic preferences and behaviors of human partners.

-   Real-Time Decision Making: Implementing algorithms that allow for
    real-time analysis and decision-making, ensuring that the robot's
    actions are always aligned with the current situation and human
    partner's expectations.

Robots designed for human collaboration in household tasks embody the
convergence of advanced robotics, artificial intelligence, and
human-computer interaction disciplines. These robots hold the potential
to not only assist in daily chores but also enrich human life by
providing companionship, understanding, and adaptability in shared
living environments. However, realizing this vision requires overcoming
substantial challenges in robot design, sensory perception, context
understanding, and safety assurance, paving the way for a future where
humans and robots collaborate seamlessly.