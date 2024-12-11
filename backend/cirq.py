# *****************************************************************************
# 
# Documentation: https://quantumai.google/cirq
# Author: Claude | Date: 2024
# *****************************************************************************

# *****************************************************************************
# INSTALLATION AND BASIC SETUP
# *****************************************************************************

# First, install Cirq using pip
# For basic installation:
# $ pip install cirq
# For Google Quantum Hardware support:
# $ pip install cirq-google

# Essential imports for quantum computing with Cirq
import cirq
import numpy as np
from typing import List, Tuple, Optional
import sympy  # For symbolic mathematics

# *****************************************************************************
# WORKING WITH QUBITS - THE BUILDING BLOCKS
# *****************************************************************************

# Cirq provides several types of qubits to match different quantum hardware architectures
# LineQubits: Represent qubits arranged in a line (1D)
# GridQubits: Represent qubits arranged in a 2D grid

def create_basic_qubits():
    # Single qubit creation
    single_line_qubit = cirq.LineQubit(0)  # Creates a single qubit at position 0
    single_grid_qubit = cirq.GridQubit(0, 1)  # Creates a qubit at row 0, column 1
    
    # Creating multiple qubits
    line_qubits = cirq.LineQubit.range(3)  # Creates 3 qubits: 0, 1, 2
    grid_qubits = cirq.GridQubit.rect(2, 2)  # Creates 2x2 grid of qubits
    
    return line_qubits, grid_qubits

# *****************************************************************************
# QUANTUM GATES - OPERATIONS ON QUBITS
# *****************************************************************************

# Gates are the fundamental operations we can perform on qubits
# They come in several varieties:
# 1. Single-qubit gates (X, Y, Z, H, etc.)
# 2. Two-qubit gates (CNOT, CZ, SWAP)
# 3. Measurement gates

def demonstrate_basic_gates(qubit: cirq.LineQubit):
    """
    Shows how to apply various quantum gates to a qubit.
    Args:
        qubit: The qubit to apply gates to
    Returns:
        List of operations to perform
    """
    # Common single-qubit gates
    operations = [
        cirq.X(qubit),  # Pauli-X gate (NOT gate)
        cirq.Y(qubit),  # Pauli-Y gate
        cirq.Z(qubit),  # Pauli-Z gate
        cirq.H(qubit),  # Hadamard gate - creates superposition
        cirq.T(qubit),  # T gate - adds phase rotation
        cirq.S(qubit)   # S gate - phase rotation
    ]
    
    return operations

def demonstrate_rotations(qubit: cirq.LineQubit):
    """
    Shows how to perform rotation operations on qubits.
    """
    # Rotation gates allow for arbitrary rotations around the X, Y, and Z axes
    rotations = [
        cirq.rx(np.pi/2)(qubit),  # Rotation around X axis
        cirq.ry(np.pi/2)(qubit),  # Rotation around Y axis
        cirq.rz(np.pi/2)(qubit)   # Rotation around Z axis
    ]
    
    return rotations

# *****************************************************************************
# BUILDING AND MANIPULATING CIRCUITS
# *****************************************************************************

def create_basic_circuit():
    """
    Demonstrates how to create and manipulate quantum circuits.
    """
    # Create qubits
    q0, q1 = cirq.LineQubit.range(2)
    
    # Create an empty circuit
    circuit = cirq.Circuit()
    
    # Add operations to the circuit
    circuit.append([
        cirq.H(q0),  # Put q0 in superposition
        cirq.CNOT(q0, q1),  # Entangle q0 and q1
        cirq.measure(q0, q1, key='result')  # Measure both qubits
    ])
    
    return circuit

# *****************************************************************************
# SIMULATION AND MEASUREMENT
# *****************************************************************************

def run_simulation(circuit: cirq.Circuit):
    """
    Demonstrates how to simulate a quantum circuit.
    Args:
        circuit: The quantum circuit to simulate
    Returns:
        Simulation results
    """
    # Create a simulator
    simulator = cirq.Simulator()
    
    # Run the simulation
    # repetitions=1000 means we'll run the circuit 1000 times
    result = simulator.run(circuit, repetitions=1000)
    
    # Access results
    measurements = result.measurements['result']
    histogram = result.histogram(key='result')
    
    return measurements, histogram

# *****************************************************************************
# NOISE MODELING AND ERROR CORRECTION
# *****************************************************************************

def add_noise_to_circuit(circuit: cirq.Circuit, noise_level: float = 0.01):
    """
    Demonstrates how to add noise to a quantum circuit.
    Args:
        circuit: The quantum circuit to add noise to
        noise_level: The probability of depolarizing noise (default: 1%)
    Returns:
        Circuit with added noise
    """
    # Create a noise model
    noise = cirq.depolarize(p=noise_level)
    
    # Create a new circuit with noise
    noisy_circuit = cirq.Circuit()
    
    # Add noise after each operation
    for moment in circuit:
        noisy_circuit.append(moment)
        noisy_circuit.append(noise.on_each(moment.qubits))
    
    return noisy_circuit

# *****************************************************************************
# ADVANCED FEATURES
# *****************************************************************************

def create_parameterized_circuit():
    """
    Shows how to create circuits with parameterized gates.
    """
    # Create a qubit
    qubit = cirq.LineQubit(0)
    
    # Create a parameter
    theta = sympy.Symbol('theta')
    
    # Create a parameterized circuit
    circuit = cirq.Circuit(
        cirq.rx(theta)(qubit),  # Parameterized rotation
        cirq.measure(qubit, key='m')
    )
    
    return circuit, theta

# *****************************************************************************
# HELPFUL TIPS AND BEST PRACTICES
# *****************************************************************************

# 1. Always initialize your qubits at the start of your program
# 2. Group related operations into functions for better organization
# 3. Use meaningful names for measurement keys
# 4. Add measurements at the end of your circuits
# 5. Consider noise effects in your simulations
# 6. Document your quantum circuits thoroughly
# 7. Use parameter sweeps for optimizing circuit parameters
# 8. Keep track of qubit connectivity constraints
# 9. Regularly visualize your circuits using print(circuit)
# 10. Test your circuits with small numbers of qubits first